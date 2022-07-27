<template>
  <div
    class="contact-form position-fixed bg-white d-flex flex-lg-row flex-column flex-column-reverse overflow-hidden"
  >
    <div class="contact-form__form">
      <h1 class="contact-form__title mb-3">Let’s get in touch</h1>
      <p class="contact-form__description">
        Lorem ipsum dolor conesecetur - lorem ipsum dolor.
      </p>
      <div>
        <div v-for="item in 5" :key="item">
          <input
            class="contact-form__input w-100 border-0 shadow-none mt-3"
            placeholder="Form label"
            type="text"
            name="input-field"
          />
        </div>
      </div>
      <div class="d-flex justify-content-lg-start justify-content-center">
        <button
          class="contact-form__send text-white border-0 shadow-none rounded-pill my-lg-3 my-4"
        >
          SEND
        </button>
      </div>
    </div>
    <div
      class="contact-form__background d-flex justify-content-center align-items-center position-relative"
    >
      <img
        class="pe-2 contact-form__background-img"
        src="@/assets/images/merch/anchora/logo-white.svg"
        alt="logo"
      />
      <button
        @click="$emit('close-modal')"
        class="bg-transparent m-4 border-0 shadow-none top-0 end-0 position-absolute"
      >
        <img src="@/assets/images/mobile/cross.svg" alt="close" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch } from "vue";
export default defineComponent({
  name: "ContactForm",
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const bodyOverflow = (state) => {
      state
        ? document.body.classList.add("body-overlay")
        : document.body.classList.remove("body-overlay");
    };
    watch(
      () => props.isModalOpen,
      (val) => {
        bodyOverflow(val);
      },
      { immediate: true }
    );
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/contact-form.scss";
</style>
