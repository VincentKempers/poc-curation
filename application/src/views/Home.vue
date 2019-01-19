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
        <h3>Welkom!</h3>
        <p>Welkom in de Alfred app! Om je opweg te helpen hebben wij een aantal boekwinkels bij jou in de buurt geselecteerd. Door een van deze boekwinkels te kiezen kunnen wij jou een gepersonaliseerd aanbod aanbieden.</p>
        <div class="welcome-button button_local">
          <button @click.prevent="nextSlide">Kies uw boekwinkel</button>
        </div>
      </slide>
      <slide>
        <img alt="Vue logo" src="../assets/onboarding.svg">
        <h3>Kies uw boekwinkel</h3>
        <div class="list-button">
          <button @click.prevent="nextSlide">De Nieuwe Boekhandel</button>
          <button @click.prevent="nextSlide">Boekhandel 2</button>
          <button @click.prevent="nextSlide">Boekhandel 3</button>
          <button @click.prevent="nextSlide">Boekhandel 4</button>
        </div>
      </slide>
      <slide>
        <img alt="Vue logo" src="../assets/onboarding.svg">
        <h3>Welkom bij de Nieuwe Boekhandel!</h3>
        <p>Je hebt gekozen voor de Nieuwe Boekhandel, perfecte keuze! De Nieuwe Boekhandel is een boekwinkel uit Bos en Lommer in Amsterdam en staat bekend om zijn huiselijke sfeer!</p>
        <div class="buttons button_local">
          <button class="white_button" @click.prevent="prevSlide">Terug</button>
          <button class="blue_button" @click.prevent="nextSlide">Volgende</button>
        </div>
      </slide>
      <slide>
        <img alt="Vue logo" src="../assets/onboarding-alfred.svg">
        <h3>Mijn naam is Alfred</h3>
        <p>Ik ben hier om je te helpen met al jouw vragen, je te sturen binnen de app en om zo nu en dan een boek aan te raden! Zou je mij kunnen vertellen wat voor boeken je graag leest?</p>
        <div class="buttons button_local">
          <button class="white_button" @click.prevent="prevSlide">Misschien later</button>
          <button class="blue_button" @click.prevent="nextSlide">Ja natuurlijk!</button>
        </div>
      </slide>
      <slide>
        <div class="block">
          <h2>Wat voor boeken lees jij graag?</h2>
          <p>
            Maak een selectie in de volgende genre’s.
            Aan de hand van jou keuzes kan ik jou boeken aanraden of je inlichten over speciale kortingen.
          </p>
          <div class="choices" id="element">
            <input type="checkbox" id="detective" value="Detective" v-model="checkedNames">
            <label for="detective">Detective</label>
            <input type="checkbox" id="kinderboeken" value="Kinderboeken" v-model="checkedNames">
            <label for="kinderboeken">Kinderboeken</label>
            <input
              type="checkbox"
              id="scienceFiction"
              value="Science Fiction"
              v-model="checkedNames"
            >
            <label for="scienceFiction">Science Fiction</label>
            <input type="checkbox" id="biografie" value="Biografie" v-model="checkedNames">
            <label for="biografie">Biografie</label>
            <input type="checkbox" id="fantasy" value="Fantasy" v-model="checkedNames">
            <label for="fantasy">Fantasy</label>
            <input type="checkbox" id="thriller" value="Thriller" v-model="checkedNames">
            <label for="thriller">Thriller</label>
            <input type="checkbox" id="oorlog" value="Oorlog" v-model="checkedNames">
            <label for="oorlog">Oorlog</label>
            <input type="checkbox" id="romans" value="Romans" v-model="checkedNames">
            <label for="romans">Romans</label>
            <input type="checkbox" id="kookboeken" value="Kookboeken" v-model="checkedNames">
            <label for="kookboeken">Kookboeken</label>
          </div>
          <div class="buttons button_local">
            <button class="white_button" @click.prevent="prevSlide">Misschien later</button>
            <button class="blue_button" @click="persist">Volgende</button>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style lang="scss" scoped>
.block {
  min-height: 90vh;
}

.button_local {
  position: relative;
  top: 7em;
  width: 100%;
}

img {
  width: 75%;
  margin: 0.2em;
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
    padding: 1em;
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
    padding: 0.8em 1.4em 0.8em 1.4em;
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

  input {
    position: absolute;
    top: -9999px;
    color: red;
  }
  input:checked + label {
    background-color: #4da1ff;
    color: white;
  }

  label {
    background-color: #e5e6e8;
    border: none;
    border-radius: 0.6em;
    margin: 0.5em;
    font-size: 1em;
    font-weight: 500;
    padding: 1em 0.8em 1em 0.8em;
  }
}

.list-button {
  button {
    background-color: #4da1ff;
    color: white;
    border: none;
    border-radius: 0.4em;
    width: 100%;
    font-size: 1em;
    font-weight: 500;
    padding: 1.4em 1em 1.4em 1em;
    margin-bottom: 4%;
  }
}
</style>



<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "home",
  data() {
    return { checkedNames: [] };
  },
  mounted() {
    if (localStorage.genres === "") {
      this.checkedNames = localStorage.genres;
    }

    // localStorage.setItem("genres", this._data.checkedNames);
  },
  watch: {
    checkedNames(newName) {
      localStorage.genres = newName;
    }
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
    persist() {
      localStorage.genres = this.checkedNames;
    }
  },
  components: {
    HelloWorld,
    Carousel,
    Slide
  }
};
</script>
