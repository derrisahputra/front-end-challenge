<template>
    <div id="the-navigation" class="container">
        <div class="wrapper-icon">
            <img class="icon" :src="require('@/assets/images/svg/beranda.svg')" alt="Beranda Icon">
            <p class="on">Beranda</p>
        </div>
         <div class="wrapper-icon">
            <img class="icon" :src="require('@/assets/images/svg/kategori.svg')" alt="Beranda Icon">
            <p>Kategori</p>
        </div>
         <div class="wrapper-icon">
            <img class="icon" :src="require('@/assets/images/svg/mitra.svg')" alt="Beranda Icon">
            <p>Mitra</p>
        </div>
         <div class="wrapper-icon">
            <img class="icon" :src="require('@/assets/images/svg/kelas.svg')" alt="Beranda Icon">
            <p>Kelas</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheNavigation"
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/TheNavigation.scss";
</style>