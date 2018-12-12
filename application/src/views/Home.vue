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
        <HelloWorld/>
        <div class="buttons">
          <button @click.prevent="prevSlide">Misschien later</button>
          <button @click.prevent="nextSlide">Ja natuurlijk!</button>
        </div>
      </slide>
      <slide>
        <p>
          "Lorem ipsum dolodadr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. "
        </p>
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
