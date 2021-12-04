<template>
  <div id="The-Review" class="container">
    <div class="background-vector"></div>
    <div class="card-container-1">
      <div class="card-container-2">
        <h3 class="title title-mobile">KATA MEREKA TENTANG KELAS BERSAMA</h3>
        <carousel
          :perPageCustom="[[320, 1]]"
          :navigationEnabled="true"
          :paginationEnabled="true"
          :speed="1200"
          :mouseDrag="false"
          :autoplay="true"
          :loop="true"
          :scrollPerPage="false"
        >
          <slide class="wrapper-card" v-for="dt in data" :key="dt.id">
            <div class="wrapper-profile">
              <img :src="dt.src.portrait" alt="" />
              <div class="profile">
                <p class="name">{{ dt.photographer }}</p>
                <p>Desainer Grafis</p>
              </div>
            </div>
            <div class="clear"></div>
            <div class="wrapper-content">
              <h3 class="title title-desktop">
                KATA MEREKA TENTANG KELAS BERSAMA
              </h3>
              <div class="content">
                “Sangat menarik dan mengesankan. Proses pelatihan sangat
                interaktif. Penyediaan fasilitas pelatihan sangat baik.”
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { photo, key } from "@/api/api";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "TheReview",
  data() {
    return {
      data: [],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    async getData() {
      await axios
        .get(photo + "/search?query=face", {
          headers: {
            "content-type": "application/json",
            Authorization: key,
          },
        })
        .then((res) => {
          this.data = res.data.photos;
          this.data.length = 4;
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
@import "@/assets/scss/TheReview.scss";
</style>

<style lang="scss">
#The-Review .VueCarousel-wrapper {
  margin-right: 200px;
  padding-left: 60px;
  overflow: initial;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    padding-left: 0px !important;
  }
}

#The-Review button.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  position: absolute;
  left: 97%;
  top: -80px;
  color: #605d62;
  transform: none;
  font-size: 15px;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    bottom: -115%;
    left: 82%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    top: -63px;
    left: 92%;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1920px) {
    top: 253px;
    left: 47%;
  }
}

#The-Review button.VueCarousel-navigation-button.VueCarousel-navigation-next {
  position: absolute;
  left: 100%;
  top: -80px;
  color: #605d62;
  transform: none;
  font-size: 15px;

  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    bottom: -115%;
    left: 90%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    top: -63px;
    left: 98%;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1920px) {
    top: 253px;
    left: 49%;
  }
}

#The-Review .VueCarousel-dot-container {
  margin-left: -66%;
  margin-top: -15px !important;
}

#The-Review .VueCarousel-dot {
  margin-right: -8px !important;
  // padding-right: 10px !important;
}
// #The-Review .VueCarousel,
// #The-Review .VueCarousel-slide,
// #The-review .VueCarousel-inner {
//   overflow: hidden;
// }
</style>