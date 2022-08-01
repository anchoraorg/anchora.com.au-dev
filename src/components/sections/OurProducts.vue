<template>
  <div class="our-products">
    <p class="our-products__title mb-0 text-md-start text-center">
      ACCELERATORS
    </p>
    <p class="our-products__sub-title mb-0 mt-4">
      <span>Our products</span> mean we get you there faster.
    </p>
    <p class="our-products__description mb-0 mt-3 text-md-start text-center">
      Reduces costs, increases quality and speed to value
    </p>
    <div class="our-products__cards d-lg-flex justify-content-center">
      <div
        v-for="(item, index) in cardItems"
        :key="index"
        class="our-products__item p-3 mx-lg-4 rounded d-flex flex-column justify-content-between"
        :style="{ backgroundColor: item.color }"
      >
        <div class="our-products__number">{{ item.number }}</div>
        <div class="logo" v-if="item.logo"><img :src="item.logo" /></div>
        <div class="logo-text" v-if="!item.logo" :style="{ color: item.color }">{{ item.title }}</div>
        <div>
          <!-- <h2 class="our-products__item-title">{{ item.title }}</h2> -->
          <p class="our-products__item-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "OurProducts",
  setup() {
    const cardItems = ref([
      {
        number: "01",
        color: "#F1B437",
        title: "Lift",
        logo: require("../../assets/images/products/lift-outline-white.svg"),
        description:
          "Lift is a clear methodology to programmatically migrate from AEM On Prem to AEM Cloud. Faster. Cheaper. Better.",
      },
      {
        number: "02",
        color: "#62C6E7",
        title: "KMD",
        description:
          "Managing practice and knowdge on your AEM projects to take full advantage of Adobe Platfrom.",
      },
      // {
      //   number: "03",
      //   color: "#E26245",
      //   title: "Product 3",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      // },
    ]);
    return {
      cardItems,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/our-products.scss";
</style>
