<template>
  <div class="dashboard">
    <Portemonneecomp/>
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
</style>

<script>
import Nav from "@/components/Navigation.vue";
import Portemonneecomp from "@/components/Portemonneecomp.vue";

export default {
  name: "Portemonnee",
  components: {
    Portemonneecomp,
    Nav
  }
};
</script>