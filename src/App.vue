<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
@import "./assets/scss/foundation/global";

@font-face {
  font-family: InterFont;
  src: $fontFamily2;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  &:focus {
    outline: 0 !important;
  }
}

#app {
  font-family: InterFont, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
</style>
