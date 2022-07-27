<template>
  <div class="home">
    <Header />
    <Preview />
    <WeDoThis id="we-do-this" />
    <Partners id="clients" />
    <OurProducts id="accelerators" />
    <OurTeam id="life-anchora" />
    <Footer />
    <ContactForm id="contact-form" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
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
});
</script>
