<template>
  <div>
    <TheHeader />
    <TheBanner />
    <KelasBelajarMandiri />
    <TheBootcamp />
    <TheCategory />
    <TheBundle />
    <MitraDanPengajar />
    <TheSources />
    <TheReview />
    <TheFooter />
    <TheNavigation />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheNavigation from "@/components/TheNavigation";
import TheReview from "@/components/TheReview";
import TheSources from "@/components/TheSources";
import MitraDanPengajar from "@/components/MitraDanPengajar";
import TheBundle from "@/components/TheBundle";
import TheCategory from "@/components/TheCategory";
import TheBootcamp from "@/components/TheBootcamp";
import KelasBelajarMandiri from "@/components/KelasBelajarMandiri";
import TheHeader from "@/components/TheHeader";
import TheBanner from "@/components/TheBanner";

export default {
  components: {
    TheFooter,
    TheNavigation,
    TheReview,
    TheSources,
    MitraDanPengajar,
    TheBundle,
    TheCategory,
    TheBootcamp,
    KelasBelajarMandiri,
    TheHeader,
    TheBanner,
  },
};
</script>