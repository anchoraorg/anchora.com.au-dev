<template>
  <div
    v-bind="$attrs"
    :class="{ 'open-menu': isMobileMenuOpen }"
    class="mobile-menu d-md-none top-0 start-0 p-4"
  >
    <div class="d-flex justify-content-between">
      <img src="@/assets/images/mobile/logo.svg" alt="logo" />
      <button
        @click="closeMobileMenu"
        class="bg-transparent border-0 shadow-none"
      >
        <img src="@/assets/images/mobile/cross.svg" alt="logo" />
      </button>
    </div>
    <div
      class="mobile-menu__container d-flex flex-column align-items-center justify-content-center"
    >
      <ul class="mobile-menu__list p-0">
        <li
          @click="closeMobileMenu"
          class="mobile-menu__item text-center text-white"
        >
          <a class="text-decoration-none text-white" href="#we-do-this"
            >What de wo</a
          >
        </li>
        <li
          @click="closeMobileMenu"
          class="mobile-menu__item text-center text-white"
        >
          <a class="text-decoration-none text-white" href="#clients">Clients</a>
        </li>
        <li
          @click="closeMobileMenu"
          class="mobile-menu__item text-center text-white"
        >
          <a class="text-decoration-none text-white" href="#accelerators"
          >Accelerators</a
          >
        </li>
        <li
          @click="closeMobileMenu"
          class="mobile-menu__item text-center text-white"
        >
          <a class="text-decoration-none text-white" href="#life-anchora"
          >Life@Ahcora</a
          >
        </li>
      </ul>
      <button
        @click="openContactForm"
        class="mobile-menu__get-in-touch border-0 shadow-none rounded-pill text-white"
      >
        GET IN TOUCH
      </button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import {
  SET_CONTACT_FORM_DATA,
  SET_MOBILE_MENU_DATA,
  SET_BODY_OVERLAY,
} from "@/store";

export default defineComponent({
  name: "MobileMenu",
  setup() {
    const store = useStore();
    const isMobileMenuOpen = computed(() => store.getters["isMobileMenuOpen"]);

    const openContactForm = () => {
      store.commit(SET_CONTACT_FORM_DATA, true);
      store.commit(SET_BODY_OVERLAY, true);
    };

    const closeMobileMenu = () => {
      store.commit(SET_MOBILE_MENU_DATA, false);
      document.body.classList.remove("overflow-hidden");
    };
    return {
      openContactForm,
      closeMobileMenu,
      isMobileMenuOpen,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/mobile-menu.scss";
</style>
