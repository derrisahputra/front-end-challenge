<template>
  <div id="The-Header" class="container">
    <img class="logo" :src="require('@/assets/images/svg/logo.svg')" alt="Logo" />
    <div class="wrapper-search">
      <img :src="require('@/assets/icons/svg/search.svg')" alt="" />
      <input type="text" placeholder="Cari apapun..." />
    </div>
    <img  class="profile" :src="require('@/assets/images/png/profile.png')" alt="Photo Profile" />
    <router-link class="button-daftar" to="">Daftar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/TheHeader.scss";
</style>