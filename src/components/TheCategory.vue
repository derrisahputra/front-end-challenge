<template>
  <div id="The-Category" class="container">
    <h1 class="title">Kategori kelas</h1>
    <carousel
      :perPageCustom="[
        [320, 2],
        [1024, 6],
      ]"
      :navigationEnabled="true"
      :paginationEnabled="false"
      :speed="1200"
      :mouseDrag="false"
      :autoplay="true"
      :loop="true"
      :scrollPerPage="false"
    >
      <slide v-for="dt in data" :key="dt.id" class="card">
        <img :src="require('@/assets/images/png/' + dt.image)" alt="" />
        <div class="content">
          <h4 class="title">{{ dt.title }}</h4>
          <p>{{ dt.totalClass }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import kategoriJson from "@/api/json/kategoriKelas.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "TheCategory",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      data: kategoriJson,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/TheCategory.scss";
</style>

<style lang="scss">
#The-Category .VueCarousel-inner {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-basis: 130px !important;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    flex-basis: 47% !important;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    flex-basis: 175px !important;
  }

  @media only screen and (min-width: 1440px) and (max-width: 1599px) {
    flex-basis: 200px !important;
  }

  @media only screen and (min-width: 1600px) and (max-width: 1920px) {
    flex-basis: 240px !important;
  }
}

#The-Category .VueCarousel-slide {
  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    height: auto;
  }
}

#The-Category button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  position: absolute;
  left: 97%;
  top: -80px;
  color: white;
  transform: none;
  font-size: 25px;

  @media only screen and (min-width: 0px) and (max-width: 424px) {
    top: -90px;
    left: 80%;
  }
  @media only screen and (min-width: 425px) and (max-width: 767px) {
    top: -90px;
    left: 85%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    top: -90px;
    left: 88%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    top: -90px;
    left: 92%;
  }
}
#The-Category button.VueCarousel-navigation-button.VueCarousel-navigation-next {
  position: absolute;
  left: 100%;
  top: -80px;
  color: white;
  transform: none;
  font-size: 25px;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    top: -90px;
    left: 95%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    top: -90px;
    left: 98%;
  }
}
</style>