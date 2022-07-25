<template>
  <div class="preview-wrapper">
    <Header />
    <div
      class="preview d-flex justify-content-center align-items-center h-auto"
    >
      <div class="d-flex flex-column align-items-center">
        <h1 class="mb-0 preview__main-text">We are</h1>
        <img
          class="preview__banner"
          src="@/assets/images/general/banner.svg"
          alt="banner"
        />
        <h2 class="preview__sub-text mt-5">
          Strategic Marketing Technology Consultancy
        </h2>
        <button
          @click="scrollToBottom"
          class="preview__scroll bg-transparent border-0 mt-5"
        >
          <img src="@/assets/images/general/preview-arrow.svg" alt="scroll" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/general/Header";
export default defineComponent({
  name: "Preview",
  components: { Header },
  props: ["refWeDoThis"],
  setup() {
    const scrollToBottom = () => {
      const getLowerSection = document.getElementById("we-do-this");
      getLowerSection.scrollIntoView();
    };
    return {
      scrollToBottom,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/preview.scss";
</style>
