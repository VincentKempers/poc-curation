<template>
  <div id="app">
    <router-view/>
    <div id="navPlaceholder">navigation</div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/alfred">Alfred</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
  max-height: 120vh;
}

#navPlaceholder {
  background-color: grey;
  padding: 15px;
  position: relative;
  bottom: 0;
  z-index: +1;
  width: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#nav {
  background-color: grey;
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
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
