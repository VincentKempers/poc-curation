<template>
  <div class="boekhandel">
    <img alt="Vue logo" src="../assets/onboarding.svg">
    <h3>Kies uw boekwinkel</h3>
    <div class="list-button">
      <button @click.prevent="nextSlide">De Nieuwe Boekhandel</button>
      <button @click.prevent="nextSlide">Boekhandel 2</button>
      <button @click.prevent="nextSlide">Boekhandel 3</button>
      <button @click.prevent="nextSlide">Boekhandel 4</button>
    </div>
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
}

.white_button {
  background-color: #e5e6e8;
}
.blue_button {
  background-color: #4da1ff;
  color: white;
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

#popup {
  background-color: rgba($color: #000000, $alpha: 0.8);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: +999;

  #container {
    background-color: white;
    width: 19em;
    height: 50%;
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
export default {
  name: "boekhandel"
};
</script>

