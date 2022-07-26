<template>
  <div
    id="header"
    class="d-flex header justify-content-between align-items-center mx-auto"
  >
    <MobileMenu
      @close-menu="mobileMenu = $event"
      :class="{ 'open-menu': mobileMenu }"
    />
    <div class="header__logo d-flex align-items-center">
      <a href="#">
        <img
          class="header__icon"
          src="@/assets/images/merch/anchora/tshirt-front.png"
          alt="logo"
          @click="window.scrollTo()"
        />
      </a>
      <span v-if="pageYOffset > stickyHeaderOffset" class="header__title"
        >Anchora</span
      >
    </div>
    <ul
      class="d-md-flex d-none justify-content-between align-items-center header__list mb-0 ps-0"
    >
      <li
        class="header__item px-lg-5 px-md-3 px-1 text-nowrap"
        v-for="(item, index) in navList"
        :key="index"
      >
        <a class="text-decoration-none" :href="item.url">
          {{ item.title }}
        </a>
      </li>
    </ul>
    <div class="header__button d-none d-md-flex justify-content-end">
      <button class="btn rounded-pill text-white">GET IN TOUCH</button>
    </div>
    <button
      class="header__menu bg-transparent border-0 shadow-none d-flex d-md-none flex-column justify-content-between"
      @click="mobileMenu = !mobileMenu"
    >
      <span class="header__item-menu d-block rounded-pill" />
      <span class="header__item-menu d-block rounded-pill" />
      <span class="header__item-menu d-block rounded-pill" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import MobileMenu from "@/components/sections/MobileMenu";
export default defineComponent({
  name: "Header",
  components: { MobileMenu },
  setup() {
    const stickyHeaderOffset = 50;
    const navList = ref([
      { title: "What we do", url: "#we-do-this" },
      { title: "Clients", url: "#clients" },
      { title: "Accelerators", url: "#accelerators" },
      { title: "Life@Anchora", url: "#life-anchora" },
    ]);
    const mobileMenu = ref(false);
    const pageYOffset = ref(null);
    const scrollListener = () => {
      const headerElement = document.getElementById("header");
      pageYOffset.value = window.pageYOffset;
      pageYOffset.value > stickyHeaderOffset
        ? headerElement.classList.add("active-header")
        : headerElement.classList.remove("active-header");
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollListener);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollListener);
    });
    return {
      navList,
      mobileMenu,
      pageYOffset,
      stickyHeaderOffset,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/header.scss";
</style>
