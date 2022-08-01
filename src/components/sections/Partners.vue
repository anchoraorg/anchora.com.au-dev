<template>
  <div class="partners">
    <div class="partners__list">
      <h2 class="partners__subtitle">PARTNERING WITH OUR CLIENTS</h2>
      <div class="">
        <div class="row">
          <div class="past col">
            <h1 class="partners__title">Current</h1>
            <span
              v-for="item in listOfPartners.current"
              :key="item.name"
              class="partners__logo"
            >
              <img :src="item.logo" :alt="item.name" />
            </span>
          </div>
          <div class="current col">
            <h1 class="partners__title">Past</h1>
            <span
              v-for="item in listOfPartners.past"
              :key="item.name"
              class="partners__logo"
            >
              <img :src="item.logo" :alt="item.name" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 mb-5">
      <div
        class="partners__about d-flex justify-content-center text-white flex-column"
      >
        <p class="partners__title-bg">
          Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>.
          Vivamus feugiat nibh et magna sollicitudin, nec efficitur risus
          vehicula.
        </p>
        <p class="partners__author">JANE DOE</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Partners",
  setup() {
    const listOfPartners = ref({
      current: [
        { name: "Kayo", logo: require("../../assets/images/clients/Kayo_Logo_RGB.png") },
        { name: "Kayo", logo: require("../../assets/images/clients/Kayo_Logo_RGB.png") },
      ],
      past: [
        { name: "Kayo", logo: require("@/assets/images/clients/Kayo_Logo_RGB.png") },
        { name: "Kayo", logo: require("@/assets/images/clients/Kayo_Logo_RGB.png") },
      ],
    });
    return {
      listOfPartners,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/partners.scss";
</style>
