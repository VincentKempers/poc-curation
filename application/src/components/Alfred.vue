<template>
  <div id="chatbot">
    <section id="alfred">
      <main class="wrapper ai-window">
        <br>
        <br>
        <!-- Display Welcome Message -->
        <div v-if="answers.length == 0 && online == true">
          <h1 class="title mdc-typography--headline">
            <img src alt>
            {{config.locale.strings.welcomeTitle}}
            <p class="mdc-typography--body2">{{config.locale.strings.welcomeDescription}}</p>
          </h1>
        </div>

        <!-- Display offline message -->
        <div v-if="answers.length == 0 && online == false">
          <h1 class="title mdc-typography--headline">
            <div class="material-icons up">cloud_off</div>
            <br>
            <br>
            {{config.locale.strings.offlineTitle}}
            <p class="mdc-typography--body2">{{config.locale.strings.offlineDescription}}</p>
          </h1>
        </div>

        <!-- Chat window -->
        <table v-for="a in answers" :key="a" class="chat-window">
          <!-- Your messages -->
          <tr>
            <td class="bubble">{{a.result.resolvedQuery}}</td>
          </tr>

          <!-- Dialogflow messages -->
          <tr>
            <td>
              <!-- Bot message types / Speech -->
              <div
                v-if="a.result.fulfillment.speech"
                class="bubble bot"
              >{{a.result.fulfillment.speech}}</div>

              <!-- Google Assistant output -->
              <div v-for="r in a.result.fulfillment.messages" :key="r">
                <!-- Bot message types / Card -->
                <div class="mdc-card" v-if="r.type == 'basic_card'">
                  <img
                    :title="r.image.accessibilityText"
                    :alt="r.image.accessibilityText"
                    class="mdc-card__media-item"
                    :src="r.image.url"
                    v-if="r.image"
                  >
                  <section class="mdc-card__primary">
                    <h1 class="mdc-card__title">{{r.title}}</h1>
                    <br>
                    <h2 class="mdc-card__subtitle">{{r.subtitle}}</h2>
                  </section>
                  <section class="mdc-card__supporting-text">{{r.formattedText}}</section>
                  <section class="mdc-card__actions" v-for="button in r.buttons" :key="button">
                    <a
                      class="mdc-button mdc-button--compact themed mdc-card__action"
                      target="_blank"
                      :href="button.openUrlAction.url"
                    >
                      {{button.title}}
                      <i class="material-icons openlink">open_in_new</i>
                    </a>
                  </section>
                </div>

                <!-- Bot message types / Carousel Card -->
                <div class="slider" v-if="r.type == 'carousel_card'">
                  <carousel
                    :perPage="1"
                    :navigationEnabled="true"
                    :paginationEnabled="false"
                    navigationNextLabel="<button class='mdc-fab mdc-fab--mini material-icons rightnav'><span class='mdc-fab__icon'>keyboard_arrow_right</span></button>"
                    navigationPrevLabel="<button class='mdc-fab mdc-fab--mini material-icons leftnav'><span class='mdc-fab__icon'>keyboard_arrow_left</span></button>"
                    :navigationClickTargetSize="0"
                    :loop="true"
                  >
                    <slide v-for="item in r.items" :key="item.id">
                      <div class="mdc-card slide">
                        <img class="mdc-card__media-item" :src="item.image.url" v-if="item.image">
                        <section class="mdc-card__primary">
                          <h1
                            class="mdc-card__title themed"
                            @click="autosubmit(item.optionInfo.key)"
                          >{{item.title}}</h1>
                        </section>
                        <section class="mdc-card__supporting-text">{{item.description}}</section>
                      </div>
                    </slide>
                  </carousel>
                </div>

                <!-- Bot message types / List -->
                <div class="mdc-list-group mdc-card" v-if="r.type == 'list_card'">
                  <h3 class="mdc-list-group__subheader">{{r.title}}</h3>
                  <ul
                    class="mdc-list mdc-list--two-line mdc-list--avatar-list"
                    v-for="item in r.items"
                    v-bind:key="item"
                    @click="autosubmit(item.optionInfo.key)"
                  >
                    <li class="mdc-list-item">
                      <img
                        :title="item.image.accessibilityText"
                        :alt="item.image.accessibilityText"
                        class="mdc-list-item__start-detail"
                        width="56"
                        height="56"
                        :src="item.image.url"
                        v-if="item.image"
                      >
                      <span class="mdc-list-item__text">
                        {{item.title}}
                        <span
                          class="mdc-list-item__text__secondary"
                        >{{item.description}}</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <!-- Bot message types / Link Chip -->
                <div v-if="r.type == 'link_out_chip'" class="chips">
                  <a class="suggestion link" :href="r.url" target="_blank">
                    {{r.destinationName}}
                    <i class="material-icons openlink">open_in_new</i>
                  </a>
                </div>

                <!-- Bot message types / Suggestion Chip -->
                <div v-if="r.type == 'suggestion_chips'" class="chips">
                  <div
                    class="suggestion"
                    @click="autosubmit(s.title)"
                    v-for="s in r.suggestions"
                    :key="s"
                  >{{s.title}}</div>
                </div>

                <!-- Bot message types / Google Suggestion Chip -->
                <div v-if="r.unknown == true" class="google-chip chips">
                  <a
                    class="suggestion"
                    :href="'https://www.google.com/search?q=' + r.text"
                    target="_blank"
                  >
                    Search for "{{r.text}}" on Google
                    <i class="material-icons openlink">search</i>
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </table>

        <br>
        <!-- <p class="copyright" v-if="answers.length > 0">
        Proudly powered by
        <a href="https://ushakov.co">Ushakov</a> &
        <a href="https://dialogflow.com">Dialogflow</a>
        </p>-->
        <a id="bottom"></a>
      </main>
      <!-- The input -->
    </section>
    <div class="query">
      <div class="wrapper" v-if="micro == false">
        <input
          :aria-label="config.locale.strings.queryTitle"
          autocomplete="off"
          v-model="query"
          class="queryform"
          @keyup.enter="submit()"
          :placeholder="config.locale.strings.queryTitle"
          autofocus
          type="text"
        >
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.alfred
    // margin: 0
    background-color: #f8fbff
    font-family: 'Roboto', 'Google Sans', sans-serif

.themed
    color: red

.wrapper
    max-width: 500px
    margin-left: auto
    margin-right: auto

.wrapper.ai-window
    padding: 1rem
    max-height: 11vh !important

.up
    font-size: 32px
    background-color: white
    padding: 10px
    border-radius: 50%


.title
    vertical-align: middle
    text-align: center
    font-weight: 700
    color: rgba(0,0,0,0.7)
    margin-top: 30%

.query
    padding: 16px 0px
    background-color: lightgray
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    position: fixed
    top: 82%
    bottom: 0
    left: 0
    width: 100%
    margin-bottom: 2em

.queryform
    // border: 0
    width: 100% - 20%
    margin-left: 0
    font-size: 16px
    outline: none
    color: rgba(0,0,0,0.8)
    font-weight: 500
    

    @media screen and (max-width: 320px)
        width: 100% - 35%

.iicon
    margin-left: 20px
    position: absolute
    vertical-align: middle
    color: rgba(0,0,0,0.8)
    cursor: pointer

.iicon.t2s
    margin-left: 10px
    margin-right: 20px

    @media screen and (max-width: 720px)
        right: 0

.chat-window
    width: 100%
    height: 50%

.chat-window:last-of-type
    margin-bottom: 8em

.bubble
    max-width: 300px
    background-color: #4da1ff
    padding: 10px
    border-radius: 8px
    color: white
    float: right
    animation: msg .25s linear

.bubble.bot
    background-color: white
    color: black 
    float: left
    margin-right: 10px

td
    margin-top: 10px
    margin-bottom: 10px

.mdc-card
    background-color: white
    max-width: 300px
    margin-bottom: 30px
    animation: msg .45s ease-in-out
    border-radius: 8px
    box-shadow: 0 1px 4px 0 rgba(32, 33, 36, 0.28)

.slide
    margin: 5px
    max-width: 300px

.slider
    max-width: 300px
    margin-left: -5px

.mdc-fab
    background-color: white
    color: red
    
.rightnav
    margin-left: -25px

    @media screen and (max-width: 720px) 
            margin-left: -25px

    @media screen and (max-width: 320px) 
            margin-left: -70px

.leftnav
    margin-right: -25px

    @media screen and (max-width: 720px)
        display: none

.openlink
    vertical-align: middle
    margin-top: -5px
    margin-left: 5px

.mdc-card__media-item
    height: auto
    width: 100%
    margin-top: -5px

.chips
    margin-left: -10px

.suggestion
    margin-top: 10px
    float: left
    margin-left: 10px
    padding: 10px
    color: rgba(0,0,0,0.7)
    background-color: white
    border: 1.5px solid rgba(0,0,0,0.2)
    border-radius: 50px
    cursor: pointer
    animation: controls .25s linear
    text-decoration: none

.suggestion:active
    color: rgba(0,0,0,1)

.suggestion:hover
    color: red
    border: 1.5px solid red

.suggestion.link
    color: white
    background-color: red
    border: 1px solid red

.suggestion.link:active
    background-color: darken(red, 10%)
    border: 1px darken(red, 10%) solid

.mdc-list-item__start-detail
    border-radius: 50%

@keyframes msg
    0%
        opacity: 0
        transform: scale(0.8)
    100%
        opacity: 1
        transform: scale(1)

@keyframes controls
    0%
        transform: scaleY(0)
    100%
        transform: scaleY(1)

</style>



<script>
import { ApiAiClient } from "api-ai-javascript";
import config from "../../config.js";

const client = new ApiAiClient({ accessToken: config.app.token }); // <- replace it with yours

export default {
  name: "Alfred",
  data: function() {
    return {
      answers: [],
      query: "",
      speech: config.locale.strings.voiceTitle,
      micro: false,
      muted: config.app.muted,
      online: navigator.onLine,
      config
    };
  },
  watch: {
    answers: function() {
      setTimeout(() => {
        document.querySelector("#bottom").scrollIntoView({
          behavior: "smooth"
        });
      }, 2); // if new answers arrive, wait for render and then smoothly scroll down to #bottom selector, used as anchor
    }
  },
  methods: {
    submit() {
      client.textRequest(this.query).then(response => {
        if (
          response.result.action == "input.unknown" &&
          this.config.app.googleIt == true
        ) {
          response.result.fulfillment.messages[0].unknown = true;
          response.result.fulfillment.messages[0].text =
            response.result.resolvedQuery;
        } // if the googleIt is enabled, show the button

        this.answers.push(response);
        this.handle(response); // <- handle the response in handle() method

        this.query = "";
        this.speech = config.locale.strings.voiceTitle; // <- reset query and speech
      });
    },
    handle(response) {
      response.result.fulfillment.messages[0].type == "simple_response";
    },
    autosubmit(suggestion) {
      this.query = suggestion;
      this.submit();
    }
  }
};
</script>
