<template>
  <div class="dashboard">
    <div id="popup" v-show="!isOpen">
      <section id="container">
        <img src="../assets/soloalfred.svg" alt="alfred">
        <div>
          <h3>Het boek is...</h3>
          <img src="../assets/books/b-fiftysg.jpg" alt="fiftyshadesofgray">
          <p>Fifty shades of Grey door E.L. James!</p>
          <a @click="isOpen = true">
            <button class="blue_button">Jouw Dashboard</button>
          </a>
        </div>
      </section>
    </div>
    <input type="text" placeholder="Typ de naam van het boek of de auteur">
    <Dash/>
    <Nav/>
  </div>
</template>

<style lang="scss" scoped>
input {
  padding: 1em;
  width: 80%;
  border: none;
  box-shadow: 0px 10px 10px rgba(216, 232, 253, 0.203635);
  margin-bottom: 1.4em;
}

#popup {
  background-color: rgba($color: #000000, $alpha: 0.8);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: +999;

  #container {
    background-color: white;
    width: 18em;
    height: 60%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 15px;

    img {
      width: 30%;
      position: relative;
      margin-top: -3em;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 38%;
        position: initial;
        margin-top: 0;
      }
      p {
        padding: 0 0.5em 0 0.5em;
      }
      a {
        width: 100%;
        button {
          background-color: #4da1ff;
          color: white;
          border: none;
          border-radius: 0.4em;
          width: 70%;
          font-size: 1em;
          font-weight: 500;
          padding: 1em 0.8em 1em 0.8em;
          margin-top: 0.5em;
        }
      }
    }
  }
}
</style>

<script>
import Nav from "@/components/Navigation.vue";
import Dash from "@/components/Dashcomponent.vue";

export default {
  name: "dashboard",
  data() {
    return { isOpen: false };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {
    Dash,
    Nav
  }
};
</script>
