<template>
  <div id="nav">
    <router-link to="/dashboard">
      <img src="../assets/Icons/Compass.svg" alt>
    </router-link>
    <router-link to="/alfred">
      <img src="../assets/Icons/Bell.svg" alt>
    </router-link>
    <router-link to="/alfred">
      <img src="../assets/Icons/Heart.svg" alt>
    </router-link>
    <router-link to="/portemonnee">
      <img src="../assets/Icons/User.svg" alt>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  background-color: #ffffff;
  padding: 15px;
  position: fixed;
  bottom: 0;
  z-index: +1;
  width: 92vw;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgray;
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
