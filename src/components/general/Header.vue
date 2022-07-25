<template>
  <div class="d-flex header justify-content-between p-4 mx-auto">
    <div class="w-25 d-flex align-items-center">
      <a href="#">
        <img
          class="header__logo"
          src="@/assets/images/merch/anchora/tshirt-front.png"
          alt="logo"
        />
      </a>
    </div>
    <ul
      class="d-flex justify-content-between align-items-center header__list w-50 mb-0"
    >
      <li class="header__item" v-for="(item, index) in navList" :key="index">
        <a class="text-decoration-none text-black" :href="item.url">
          {{ item.title }}
        </a>
      </li>
    </ul>
    <div class="header__button w-25 d-flex justify-content-end">
      <button class="btn rounded-pill text-white">GET IN TOUCH</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  setup() {
    const navList = ref([
      { title: "What we do", url: "#" },
      { title: "Clients", url: "#" },
      { title: "Accelerators", url: "#" },
      { title: "Life@Anchora", url: "#" },
    ]);
    return {
      navList,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/header.scss";
</style>
