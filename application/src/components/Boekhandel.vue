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
export default {
  name: "boekhandel"
};
</script>

