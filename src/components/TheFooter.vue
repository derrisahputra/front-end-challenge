<template>
  <div id="the-footer" class="container">
    <div class="wrapper">
      <div class="kelas-bersama column">
        <ul>
          <h3 class="sub-title">Kelas Bersama</h3>
          <li>Tentang Kami</li>
          <li>Kontak Kami</li>
          <li>Mitra Kelas Bersama</li>
          <li>Karier</li>
          <li>Bantuan</li>
        </ul>
      </div>
      <div class="kebijakan column">
        <ul>
          <h3 class="sub-title">Kebijakan</h3>
          <li>Syarat Ketentuan</li>
          <li>Kebijakan Privasi</li>
        </ul>
      </div>
      <div class="reserved">
          <p>&copy; 2021 Kelas Bersama</p>
          <p>All rights reserved</p>
          <div class="icon-wrapper">
            <img class="icon" :src="require('@/assets/images/svg/ig.svg')" alt="Instagram Icon">
            <img class="icon" :src="require('@/assets/images/svg/yt.svg')" alt="Instagram Icon">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TheFooter"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/TheFooter.scss";
</style>