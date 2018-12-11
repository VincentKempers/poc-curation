<template>
  <div class="hello">
    <h3>Welkom bij de Nieuwe Boekhandel!</h3>
    <p>
      "Lorem ipsum dolodadr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. "
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buttons {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  right: 0;
  left: 0;
  bottom: 1em;

  button {
    border: none;
    border-radius: 0.4em;
    width: 8.5rem;
    font-size: 1.1em;
    padding: 0.55rem;
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
