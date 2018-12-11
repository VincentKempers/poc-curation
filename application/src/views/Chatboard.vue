<template>
  <section id="chatboard">
    <Alfred/>
    <Nav/>
  </section>
</template>

<script>
import Nav from "@/components/Navigation.vue";
import Alfred from "@/components/Alfred.vue";

export default {
  name: "chatboard",
  components: {
    Alfred,
    Nav
  }
};
</script>
