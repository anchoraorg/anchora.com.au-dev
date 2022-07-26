<template>
  <div class="partners">
    <div class="partners__list">
      <h2 class="partners__subtitle">PARTNERING WITH OUR CLIENTS</h2>
      <h1 class="partners__title">Lorem ipsum, consecter adipiscing elit.</h1>
      <div class="partners__wrapper-logo">
        <div v-for="item in 15" :key="item" class="partners__logo">
          <img src="@/assets/images/partners/kayo.svg" alt="partner" />
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Partners",
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/partners.scss";
</style>
