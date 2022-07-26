<template>
  <div v-bind="$attrs" class="mobile-menu d-md-none top-0 start-0 p-4">
    <div class="d-flex justify-content-between">
      <img src="@/assets/images/mobile/logo.svg" alt="logo" />
      <button
        @click="$emit('close-menu', false)"
        class="bg-transparent border-0 shadow-none"
      >
        <img src="@/assets/images/mobile/cross.svg" alt="logo" />
      </button>
    </div>
    <div
      class="mobile-menu__container d-flex flex-column align-items-center justify-content-center"
    >
      <ul class="mobile-menu__list p-0">
        <li class="mobile-menu__item text-center text-white">What de wo</li>
        <li class="mobile-menu__item text-center text-white">Clients</li>
        <li class="mobile-menu__item text-center text-white">Accelerators</li>
        <li class="mobile-menu__item text-center text-white">Life@Ahcora</li>
      </ul>
      <button
        class="mobile-menu__get-in-touch border-0 shadow-none rounded-pill text-white"
      >
        GET IN TOUCH
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MobileMenu",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/mobile-menu.scss";
</style>
