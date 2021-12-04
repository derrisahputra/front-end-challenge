<template>
  <div id="The-Bundle" class="container">
    <div class="column-1">
      <h3 class="title">
        Hanya segini aja? Jangan khawatir, kami menyediakan paket bundle!
      </h3>
      <p>Get more, fore less, all in one place</p>
      <router-link to="#" class="link-for-desktop">Lihat lebih lengkap</router-link>
    </div>
    <div class="column-2">
      <div class="card" v-for="dt in data" :key="dt.id">
        <h3 class="title">{{ dt.title }}</h3>
        <p class="by">Oleh {{ dt.by }}</p>
        <img
          :src="require('@/assets/images/png/' + dt.images[0].image1)"
          alt=""
        />
        <img
          :src="require('@/assets/images/png/' + dt.images[1].image2)"
          alt=""
        />
        <div class="wrapper-end">
          <div class="column-1">
            <p class="time-total">{{ dt.timeTotal }}</p>
            <span class="price">{{ dt.price }}</span>
            <span class="discount-price">{{ dt.discountPrice }}</span>
          </div>
          <div class="column-2">
            <span><button>Beli</button></span>
          </div>
        </div>
      </div>
    </div>
    <router-link to="#" class="link-for-mobile">Lihat lebih lengkap</router-link>
    <div class="clear"></div>
  </div>
</template>

<script>
import bundleJson from "@/api/json/bundle.json";

export default {
  name: "TheBundle",
  data() {
    return {
      data: bundleJson,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/TheBundle.scss";
</style>
