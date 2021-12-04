<template>
  <div id="Mitra-Dan-Pengajar" class="container">
    <div class="mitra-dan-pengajar-section">
      <h1 class="title-section-desktop">Mitra & Pengajar di Kelas Bersama</h1>
      <h1 class="title-section-mobile">Tentang Pengajar</h1>
      <router-link to="#">Lihat semua pengajar</router-link>
    </div>
    <div class="wrapper-card">
      <div class="card" v-for="data in photos" :key="data.id">
        <div class="wrapper-photo">
          <img :src="data.src.portrait" alt="" />
        </div>
        <div class="name-and-position">
          <p class="teacher-name">{{ data.photographer }}</p>
          <p>Multimedia Producer</p>
        </div>
      </div>
      <div class="card last-card">
        <h3 class="join-text">Bergabung menjadi pengajar</h3>
        <p>Bergabung bersama 500+ pengajar untuk berkontribusi</p>
        <button>Buat Akun</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { photo, key } from "@/api/api";

export default {
  name: "MitraDanPengajar",
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    async getPhotos() {
      await axios
        .get(photo + "search?query=face", {
          headers: {
            "content-type": "application/json",
            Authorization: key,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.photos = res.data.photos;
            this.photos.length = 11;
          }
        });
    },
  },
  created() {
    try {
      this.getPhotos();
    } catch (error) {
      console.log(error.response.data);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/MitraDanPengajar.scss";
</style>