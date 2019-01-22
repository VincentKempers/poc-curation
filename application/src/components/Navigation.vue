<template>
  <div id="nav">
    <router-link to="/dashboard">
      <img src="../assets/Icon/Compass.png" alt>
    </router-link>
    <router-link to="/about">
      <img src="../assets/Icon/Bell.png" alt>
    </router-link>
    <router-link to="/alfred">
      <img src="../assets/Icon/Heart.png" alt>
    </router-link>
    <router-link to="/alfred">
      <img src="../assets/Icon/User.png" alt>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  background-color: #ffffff;
  // background-color: black;
  padding: 15px;
  position: fixed;
  bottom: 0;
  z-index: +1;
  width: 92vw;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1em 0 1em;
    &.router-link-exact-active {
      color: #42b983;
    }
    img {
      width: 1.5em;
    }
  }
}
</style>




<script>
export default {
  name: "Navigation"
};
</script>
