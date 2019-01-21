<template>
  <div class="dashboard">
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
  margin-bottom: 2em;
}
</style>

<script>
import Nav from "@/components/Navigation.vue";
import Dash from "@/components/Dashcomponent.vue";

export default {
  name: "dashboard",
  components: {
    Dash,
    Nav
  }
};
</script>
