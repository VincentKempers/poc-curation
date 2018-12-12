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
        <div class="buttons">
          <button @click.prevent="prevSlide">Misschien later</button>
          <button @click.prevent="nextSlide">Volgende</button>
        </div>
      </slide>
      <slide>
        <img alt="Vue logo" src="../assets/onboarding-alfred.svg">
        <h3>Mijn naam is Alfred</h3>
        <p>Ik ben hier om je te helpen met al jouw vragen, je te sturen binnen de app en om zo nu en dan een boek aan te raden! Zou je mij kunnen vertellen wat voor boeken je graag leest?</p>
        <div class="buttons">
          <button @click.prevent="prevSlide">Misschien later</button>
          <button @click.prevent="nextSlide">Ja natuurlijk!</button>
        </div>
      </slide>
      <slide>
        <h2>Wat voor boeken lees jij graag?</h2>
        <p>
          Maak een selectie in de volgende genre’s.
          Aan de hand van jou keuzes kan ik jou boeken aanraden of je inlichten over speciale kortingen.
        </p>

        <div class="choices">
          <label>
            <input type="checkbox">genre
          </label>
          <label>
            <input type="checkbox">genre
          </label>
          <label>
            <input type="checkbox">genre
          </label>
          <label>
            <input type="checkbox">genre
          </label>
          <label>
            <input type="checkbox">genre
          </label>
        </div>
        <div class="buttons">
          <button @click.prevent="prevSlide">Misschien later</button>
          <button @click.prevent="nextSlide">Volgende</button>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style lang="scss" scoped>
.VueCarousel-slide {
  min-height: 98vh;
}

img {
  width: 80%;
}

.buttons {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-items: center;
  right: 0;
  left: 0;
  bottom: 0 !important;
  z-index: +1;

  button {
    border: none;
    border-radius: 0.4em;
    width: 9rem;
    font-size: 1em;
    font-weight: 500;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }
  button:nth-child(1) {
    background-color: #e5e6e8;
  }
  button:nth-child(2) {
    background-color: #4da1ff;
    color: white;
  }
}

.choices {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  label {
    background-color: #e5e6e8;
    border: none;
    border-radius: 0.4em;
    margin: 1em;
    width: 4rem;
    font-size: 1em;
    font-weight: 500;
    padding: 1.4rem 0.8rem 1.4rem 0.8rem;

    input {
      visibility: hidden;
      position: absolute;
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
