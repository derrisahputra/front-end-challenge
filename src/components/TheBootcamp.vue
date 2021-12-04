<template>
  <div id="The-Bootcamp" class="container">
    <div class="column-1">
      <div class="card">
        <h1 class="title">Belajar secara langsung dengan pengajar</h1>
        <div class="wrapper-category">
          <span class="active-category">Bootcamp</span>
          <span>Kelas Intensif</span>
          <span>Webinar</span>
        </div>
        <router-link to="" class="link-for-desktop"
          >Lihat lebih lengkap</router-link
        >
      </div>
    </div>
    <div class="column-2">
      <h1 class="title">Bootcamp</h1>
      <carousel
        :perPageCustom="[
          [320, 2],
          [1024, 3],
        ]"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :speed="800"
      >
        <slide class="card" v-for="dt in data" :key="dt.id">
          <div class="wrapper-image">
            <div class="wrapper-category">
              <img
                class="icon"
                :src="require('@/assets/icons/svg/category.svg')"
                alt=""
              />
              <template v-if="dt.recommendation">
                <span class="category" style="font-size: 11px">{{
                  dt.category
                }}</span>
              </template>
              <template v-else
                ><span class="category">{{ dt.category }}</span></template
              >
            </div>
            <template v-if="dt.recommendation">
              <span class="topic topic-recommendation"
                >Pilihan Kelas Bersama</span
              >
            </template>
            <div class="wrapper-topic">
              <span class="topic">{{ dt.topic[0] }}</span>
              <span class="topic">{{ dt.topic[1] }}</span>
            </div>

            <div class="overlay"></div>
            <img
              :src="require('@/assets/images/png/' + dt.image)"
              :alt="dt.image"
            />
          </div>
          <div class="content">
            <h3 class="title">{{ dt.title }}</h3>
            <p class="by">Oleh {{ dt.by }}</p>
            <div class="wrapper-date">
              <img :src="require('@/assets/icons/svg/date.svg')" alt="" />
              <span class="start-date">{{ dt.startDate }}</span> -
              <span class="due-date">{{ dt.dueDate }}</span>
            </div>
            <div class="rating-and-price">
              <div class="wrapper-rating">
                <img :src="require('@/assets/icons/svg/star.svg')" alt="" />
                <span>{{ dt.rating }} ({{ dt.count }})</span>
              </div>
              <div class="wrapper-price">
                <span class="price">{{ dt.price }}</span>
                <span class="discount-price">{{ dt.discountPrice }}</span>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
      <router-link to="" class="link-for-mobile"
        >Lihat lebih lengkap</router-link
      >
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import bootcampJson from "@/api/json/bootcamp.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "TheBootcamp",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      data: bootcampJson,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/TheBootcamp.scss";
</style>


<style lang="scss">
#The-Bootcamp .VueCarousel-inner {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-basis: 130px !important;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    flex-basis: 48% !important;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    flex-basis: 280px !important;
  }

  @media only screen and (min-width: 1440px) and (max-width: 1599px) {
    flex-basis: 300px !important;
  }

  @media only screen and (min-width: 1600px) and (max-width: 1920px) {
    flex-basis: 360px !important;
  }
}

#The-Bootcamp .VueCarousel-slide {
  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    height: auto;
  }
}

#The-Bootcamp button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  position: absolute;
  left: 97%;
  top: -80px;
  color: #605d62;
  transform: none;
  font-size: 25px;

  @media only screen and (min-width: 0px) and (max-width: 424px) {
    top: -63px;
    left: 80%;
  }
  @media only screen and (min-width: 425px) and (max-width: 767px) {
    top: -63px;
    left: 85%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    top: -63px;
    left: 88%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    top: -63px;
    left: 92%;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1920px) {
    top: -63px;
    left: 85.5%;
  }
}
#The-Bootcamp button.VueCarousel-navigation-button.VueCarousel-navigation-next {
  position: absolute;
  left: 100%;
  top: -80px;
  color: #605d62;
  transform: none;
  font-size: 25px;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    top: -63px;
    left: 95%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    top: -63px;
    left: 98%;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1920px) {
    top: -63px;
    left: 89%;
  }
}
</style>