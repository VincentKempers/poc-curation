<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "SourceSansPro";
  src: url("assets/font/SourceSansPro-Regular.ttf");
}

html {
  background-color: #f8fbff;
}

#app {
  font-family: "SourceSansPro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
  max-height: 100vh;
}
</style>
