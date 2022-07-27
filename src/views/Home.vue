<template>
  <div class="home">
    <Header @open-modal="isModalOpen = true" />
    <Preview />
    <WeDoThis id="we-do-this" />
    <Partners id="clients" />
    <OurProducts id="accelerators" />
    <OurTeam id="life-anchora" />
    <Footer />
    <ContactForm
      :is-modal-open="isModalOpen"
      @close-modal="isModalOpen = false"
      :class="{ 'contact-open': isModalOpen }"
      id="contact-form"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Preview from "@/components/sections/Preview";
import WeDoThis from "@/components/sections/WeDoThis";
import Partners from "@/components/sections/Partners";
import OurProducts from "@/components/sections/OurProducts";
import OurTeam from "@/components/sections/OurTeam";
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import ContactForm from "@/components/general/ContactForm";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
    OurTeam,
    OurProducts,
    Partners,
    WeDoThis,
    Preview,
    ContactForm,
  },

  setup() {
    const isModalOpen = ref(false);
    return {
      isModalOpen,
    };
  },
});
</script>
