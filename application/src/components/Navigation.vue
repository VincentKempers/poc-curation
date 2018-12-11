<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/alfred">Alfred</router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  background-color: grey;
  padding: 15px;
  position: fixed;
  bottom: 0;
  z-index: +1;
  width: 97vw;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>




<script>
export default {
  name: "Navigation"
};
</script>
