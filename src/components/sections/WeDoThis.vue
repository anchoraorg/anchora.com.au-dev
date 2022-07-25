<template>
  <div class="we-do-this">
    <h1 class="we-do-this__title text-center">WE DO THIS</h1>
    <p class="we-do-this__sub-title text-center w-50 mx-auto pb-5 mb-4">
      We integrate data and experience to provide
      <span>meaning interactions</span>
      between brands and <br />
      your customers
    </p>
    <div class="we-do-this__card d-flex justify-content-between">
      <div class="we-do-this__item" v-for="(item, index) in listOfItems" :key="index">
        <div class="d-flex justify-content-center">
          <img
            class="mx-auto"
            :src="require(`@/assets/images/we-do-this/${item.icon}.svg`)"
            alt="item"
          />
        </div>
        <p :style="{ color: item.color }" class="text-center">
          {{ item.title }}
        </p>
        <p class="text-center we-do-this__card-subtitle">{{ item.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "WeDoThis",
  setup() {
    const listOfItems = ref([
      {
        icon: "database",
        title: "Data and Content Driven Martech",
        subtitle: "Lorem ipsum dolor sit amet, consectetutur adipsincing elit.",
        color: "#D89FC5",
      },
      {
        icon: "edit",
        title: "Architecture & Development",
        subtitle: "Lorem ipsum dolor sit amet, consectetutur adipsincing elit.",
        color: "#E26245",
      },
      {
        icon: "setting",
        title: "End-to-End Implementation",
        subtitle: "Lorem ipsum dolor sit amet, consectetutur adipsincing elit.",
        color: "#62C6E7",
      },
      {
        icon: "flag",
        title: "Drive Success",
        subtitle: "Lorem ipsum dolor sit amet, consectetutur adipsincing elit.",
        color: "#F1B437",
      },
    ]);
    return {
      listOfItems,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/we-do-this.scss";
</style>
