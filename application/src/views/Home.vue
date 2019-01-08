<template>
  <div class="home">
    <carousel
      ref="carousel"
      :perPage="1"
      :navigationEnabled="false"
      :paginationEnabled="false"
      :scrollPerPage="true"
      :mouseDrag="true"
    >
      <slide>
        <img alt="Vue logo" src="../assets/onboarding.svg">
        <HelloWorld/>
        <div class="welcome-button button_local">
          <button @click.prevent="nextSlide">Kies uw boekwinkel</button>
        </div>
      </slide>
      <slide>
        <img alt="Vue logo" src="../assets/onboarding-alfred.svg">
        <h3>Kies uw boekwinkel</h3>
        <p>Ik ben hier om je te helpen met al jouw vragen, je te sturen binnen de app en om zo nu en dan een boek aan te raden! Zou je mij kunnen vertellen wat voor boeken je graag leest?</p>
        <div class="buttons button_local">
          <button class="white_button" @click.prevent="prevSlide">Misschien later</button>
          <button class="blue_button" @click.prevent="nextSlide">Ja natuurlijk!</button>
        </div>
      </slide>
      <slide>
        <h2>Wat voor boeken lees jij graag?</h2>
        <p>
          Maak een selectie in de volgende genre’s.
          Aan de hand van jou keuzes kan ik jou boeken aanraden of je inlichten over speciale kortingen.
        </p>

        <div class="choices">
          <label id="label">
            <input type="checkbox">Detective
          </label>
          <label>
            <input type="checkbox">Kinderboeken
          </label>
          <label>
            <input type="checkbox">Science Fiction
          </label>
          <label>
            <input type="checkbox"> Biografie
          </label>
          <label>
            <input type="checkbox">Fantasy
          </label>
          <label>
            <input type="checkbox">Roman
          </label>
          <label>
            <input type="checkbox">Thriller
          </label>
          <label>
            <input type="checkbox">Oorlog
          </label>
          <label>
            <input type="checkbox">Literatuur
          </label>
          <label>
            <input type="checkbox">Biografie
          </label>
        </div>
        <div class="buttons">
          <button class="white_button" @click.prevent="prevSlide">Misschien later</button>
          <button class="blue_button" @click.prevent="nextSlide">Volgende</button>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style lang="scss" scoped>
.VueCarousel-wrapper {
  min-height: 100vh;
}

.button_local {
  position: relative;
  bottom: 0;
  width: 100%;
}

img {
  width: 80%;
}

.welcome-button {
  button {
    background-color: #4da1ff;
    color: white;
    border: none;
    border-radius: 0.4em;
    width: 100%;
    font-size: 1em;
    font-weight: 500;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    padding: 1.4em 1em 1.4em 1em;
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-items: center;
  right: 0;
  left: 0;
  bottom: 0 !important;

  button {
    border: none;
    border-radius: 0.4em;
    font-size: 1em;
    font-weight: 500;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    padding: 1.4em 1em 1.4em 1em;
  }
  .white_button {
    background-color: #e5e6e8;
  }
  .blue_button {
    background-color: #4da1ff;
    color: white;
  }
}

.choices {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em 0 1em 0;
  label {
    background-color: #e5e6e8;
    border: none;
    border-radius: 0.6em;
    margin: 0.5em;
    font-size: 1em;
    font-weight: 500;
    padding: 1em 0.8em 1em 0.8em;

    input {
      visibility: hidden;
      position: absolute;
      color: red;
      input:checked ~ #label {
        color: red;
      }
    }
  }
}
</style>



<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }
  },
  components: {
    HelloWorld,
    Carousel,
    Slide
  }
};
</script>
