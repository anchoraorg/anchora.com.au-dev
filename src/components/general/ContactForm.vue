<template>
  <div
    :class="{ 'contact-open': isContactFormOpen }"
    class="contact-form position-fixed bg-white d-flex flex-lg-row flex-column flex-column-reverse overflow-hidden"
  >
    <div class="contact-form__form d-flex flex-column justify-content-between">
      <div class="contact-form__text">
        <h1 class="contact-form__title mb-3">Let’s get in touch</h1>
      </div>
      <div
        class="contact-form__fields d-flex flex-column justify-content-between"
      >
        <AInput v-model="userState.user_name" placeholder="First name" />
        <AInput v-model="userState.user_surname" placeholder="Last name" />
        <!-- <AInput v-model="userState.user_age" placeholder="Age" /> -->
        <AInput v-model="userState.user_email" placeholder="Email" />
        <AInput v-model="userState.user_phone" placeholder="Phone" />
      </div>
      <div
        class="contact-form__send-box d-flex justify-content-lg-start justify-content-center align-items-center mx-lg-0 mx-auto"
      >
        <button
          class="contact-form__send h-auto text-white border-0 shadow-none rounded-pill my-lg-3 my-4"
          @click="closeContactForm"
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
        src="@/assets/images/anchora-logo-white.svg"
        alt="logo"
      />
      <button
        @click="closeContactFormClose"
        class="bg-transparent contact-form__close-form border-0 shadow-none top-0 end-0 position-absolute"
      >
        <img src="@/assets/images/mobile/cross.svg" alt="close" />
      </button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { SET_CONTACT_FORM_DATA, SET_BODY_OVERLAY, SEND_CONTACT_FORM_DATA } from "@/store";
import AInput from "@/components/common/AInput";

export default defineComponent({
  name: "ContactForm",
  components: { AInput },
  setup() {
    const store = useStore();
    const userState = ref({
      user_name: "",
      user_surname: "",
      // user_age: null,
      user_email: "",
      user_phone: "",
    });
    const isContactFormOpen = computed(
      () => store.getters["isContactFormOpen"]
    );
    const closeContactFormClose = () => {
      store.commit(SET_CONTACT_FORM_DATA, false);
      store.commit(SET_BODY_OVERLAY, false);
    };
    const closeContactForm = () => {
      store.commit(SEND_CONTACT_FORM_DATA, userState.value);
      store.commit(SET_CONTACT_FORM_DATA, false);
      store.commit(SET_BODY_OVERLAY, false);
    };
    return {
      isContactFormOpen,
      closeContactForm,
      closeContactFormClose,
      userState,
      store,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/contact-form.scss";
</style>
