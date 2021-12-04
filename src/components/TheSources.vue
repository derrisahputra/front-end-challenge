<template>
  <div id="The-Sources" class="container">
    <h1 class="title-section">Sumber untuk membantumu belajar</h1>
    <div class="wrapper-sources">
      <div class="column-1">
        <div class="weekly-row-1">
          <div class="weekly">
            <h3 class="label">Weekly Creative Brief</h3>
            <p>
              Weekly Creative Brief is a resource of emotional and practical
              guidance for creative people.
            </p>
            <router-link to="#"
              >Telusuri Semua Artikel
              <img
                class="arrow-icon"
                :src="require('@/assets/icons/arrow-right.png')"
                alt=""
            /></router-link>
          </div>
          <div class="weekly-image"></div>
          <router-link to="#"
              >Telusuri Semua Artikel
              <img
                class="arrow-icon"
                :src="require('@/assets/icons/arrow-right.png')"
                alt=""
            /></router-link>
        </div>
        <div class="clear"></div>
        <div class="weekly-row-2">
          <div class="card" v-for="dt in dataArtikel" :key="dt.id">
            <div class="wrapper-image">
              <img :src="require('@/assets/images/svg/' + dt.image)" alt="" />
              <div class="wrapper-category">
                <span class="category">{{ dt.category[0] }}</span>
                <span class="category">{{ dt.category[1] }}</span>
              </div>
            </div>
            <h3 class="title">{{ dt.title }}</h3>
            <router-link to="#">Baca Artikel</router-link>
          </div>
        </div>
      </div>
      <div class="column-2">
        <div class="wrapper-label">
          <img :src="require('@/assets/images/png/headphones.png')" alt="" />
          <h3 class="label">Podcast Bersama</h3>
        </div>
        <div class="wrapper-podcast-list">
          <div class="podcast-list" v-for="dt in dataPodcast" :key="dt.id">
            <h3 class="title">{{ dt.title }}</h3>
            <router-link to="">Dengarkan Podcast</router-link>
            <hr />
          </div>
          <br><br>
          <router-link to="#">Lihat Semua Episode</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artikelJson from "@/api/json/artikel.json";
import podcastJson from "@/api/json/podcast.json";

export default {
  data() {
    return {
      dataArtikel: artikelJson,
      dataPodcast: podcastJson,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/TheSources.scss";
</style>