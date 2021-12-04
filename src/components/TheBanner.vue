<template>
  <div id="The-Banner">
    <carousel
      :perPageCustom="[[320, 1]]"
      :navigationEnabled="true"
      :paginationEnabled="false"
      :speed="2200"
      :mouseDrag="false"
      :autoplay="true"
      :loop="true"
      :autoplayTimeout="3500"
      class="container"
    >
      <slide v-for="dt in data" :key="dt.id">
        <div class="overlay"></div>
        <div class="wrapper-content">
          <div class="content">
            <p class="category">{{ dt.category }}</p>
            <h1 class="title">{{ dt.title }}</h1>
            <p class="sub-title">{{ dt.subtitle }}</p>
            <template v-if="!dt.action.label == ''">
              <router-link class="button" to="#">{{
                dt.action.label
              }}</router-link>
            </template>
            <template v-else>
              <router-link class="button" to="#">Lihat Kelas</router-link>
            </template>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
import axios from "axios";
import { api } from "@/api/api";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "TheBanner",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getData() {
      await axios.get(api + "/banner-promotion").then((res) => {
        this.data = res.data.data.list;
      });
    },
  },
  created() {
    try {
      this.getData();
    } catch (error) {
      console.log(error.response.data);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/TheBanner.scss";
</style>

<style lang="scss">
#The-Banner .VueCarousel-inner {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  //   flex-basis: 130px !important;

  @media only screen and (min-width: 0px) and (max-width: 1920px) {
    flex-basis: 100% !important;
  }
}

#The-Banner .VueCarousel-slide {
  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    height: auto;
  }
}
#The-Banner button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  position: absolute;
  color: #605d62;
  transform: none;
  font-size: 25px;
  background-color: #ffffff;
  border-radius: 50%;
  width: 50px;
  padding: 0 !important;

  @media only screen and (min-width: 0px) and (max-width: 1439px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 40%;
    left: 6%;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1920px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 40%;
    left: 14%;
  }
}
#The-Banner button.VueCarousel-navigation-button.VueCarousel-navigation-next {
  position: absolute;
  color: #605d62;
  transform: none;
  font-size: 25px;
  background-color: #ffffff;
  border-radius: 50%;
  width: 50px;
  padding: 0 !important;

  @media only screen and (min-width: 0px) and (max-width: 1439px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 40%;
    left: 90%;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1920px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 40%;
    left: 85%;
  }
}
</style>