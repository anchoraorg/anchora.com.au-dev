<template>
  <div
    id="header"
    class="d-flex header justify-content-between align-items-center mx-auto"
  >
    <MobileMenu />
    <div class="header__logo d-flex align-items-center">
      <router-link
        to="/"
        class="text-decoration-none d-flex align-items-center"
      >
        <img
          class="header__icon"
          src="@/assets/images/anchora-logo-square-transparent.png"
          alt="logo"
        />
        <span v-if="pageYOffset > stickyHeaderOffset" class="header__title">
          Anchora
        </span>
      </router-link>
    </div>
    <ul
      class="d-md-flex d-none justify-content-between align-items-center header__list mb-0 ps-0"
    >
      <li
        class="header__item text-nowrap d-flex align-items-center"
        v-for="(item, index) in navList"
        :key="index"
      >
        <a class="text-decoration-none" :href="item.url">
          {{ item.title }}
        </a>
      </li>
    </ul>
    <div class="header__button d-none d-md-flex justify-content-end">
      <button
        @click="openContactForm"
        class="btn rounded-pill border-0 text-white"
      >
        GET IN TOUCH
      </button>
    </div>
    <button
      class="header__menu bg-transparent border-0 shadow-none d-flex d-md-none flex-column justify-content-between"
      @click="openMobileMenu"
    >
      <span class="header__item-menu d-block rounded-pill" />
      <span class="header__item-menu d-block rounded-pill" />
      <span class="header__item-menu d-block rounded-pill" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import MobileMenu from "@/components/general/MobileMenu";
import { useStore } from "vuex";
import {
  SET_CONTACT_FORM_DATA,
  SET_MOBILE_MENU_DATA,
  SET_BODY_OVERLAY,
} from "@/store";

export default defineComponent({
  name: "Header",
  components: { MobileMenu },
  setup() {
    const store = useStore();
    const stickyHeaderOffset = 50;
    const pageYOffset = ref(null);
    const navList = ref([
      { title: "What we do", url: "#we-do-this" },
      { title: "Clients", url: "#clients" },
      { title: "Accelerators", url: "#accelerators" },
      { title: "Life@Anchora", url: "#life-anchora" },
    ]);
    const openContactForm = () => {
      store.commit(SET_CONTACT_FORM_DATA, true);
      store.commit(SET_BODY_OVERLAY, true);
    };

    const openMobileMenu = () => {
      store.commit(SET_MOBILE_MENU_DATA, true);
      document.body.classList.add("overflow-hidden");
    };
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
      pageYOffset,
      stickyHeaderOffset,
      openMobileMenu,
      openContactForm,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/header.scss";
</style>
