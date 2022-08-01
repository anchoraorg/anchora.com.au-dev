<template>
  <div class="partners">
    <div class="partners__list">
      <h2 class="partners__subtitle">PARTNERING WITH OUR CLIENTS</h2>
      <div class="partners__wrapper-logo">
        <div
          v-for="item in listOfPartners.current"
          :key="item.name"
          class="partners__logo"
        >
          <img :src="item.logo" :alt="item.name" />
        </div>
        <div
          v-for="item in listOfPartners.past"
          :key="item.name"
          class="partners__logo"
        >
          <img :src="item.logo" :alt="item.name" />
        </div>
      </div>
      <!-- <div class="container">
        <div class="row row-spacer">
          <div class="past col">
            <h1 class="partners__title">Working with</h1>
            <div class="d-flex flex-wrap">
              <div
                v-for="item in listOfPartners.current"
                :key="item.name"
                class="partners__logo current"
              >
                <img :src="item.logo" :alt="item.name" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="current col">
            <h1 class="partners__title">Worked with</h1>
            <div class="d-flex flex-wrap">
              <div
                v-for="item in listOfPartners.past"
                :key="item.name"
                class="partners__logo"
              >
                <img :src="item.logo" :alt="item.name" />
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="px-5 mb-5">
      <div
        class="partners__about d-flex justify-content-center text-white flex-column"
      >
        <div v-for="item in listOfPartners.quotes" :key="item.name">
          <p class="partners__title-bg quote">{{ item.description }}</p>
          <p class="partners__author">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Partners",
  setup() {
    const listOfPartners = ref({
      quotes: [
        {
          description:
            "Anchora not only had the capability to execute and provide value, but the influence within the software vendor to make it all happen.",
          name: "Cbus",
        },
      ],
      current: [
        {
          name: "Cbus",
          logo: require("../../assets/images/clients/cbus_superfund_logo_new_cmyk.png"),
        },
        {
          name: "Xero",
          logo: require("../../assets/images/clients/Xero_software_logo.svg"),
        },
        {
          name: "AMP",
          logo: require("../../assets/images/clients/amp_white.jpeg"),
        },
      ],
      past: [
        {
          name: "Kayo",
          logo: require("../../assets/images/clients/Kayo_Logo_RGB.png"),
        },
        {
          name: "Velocity",
          logo: require("../../assets/images/clients/velocity-frequent-flyer-logo-vector.svg"),
        },
        { name: "BMW", logo: require("../../assets/images/clients/BMW.svg") },
        {
          name: "SBS",
          logo: require("../../assets/images/clients/SBS_logo.svg.png"),
        },
        {
          name: "Asutralian Institute of Company Directors",
          logo: require("../../assets/images/clients/aicd.png"),
        },
        {
          name: "Mitsubishi",
          logo: require("../../assets/images/clients/Mitsubishi_Motors_SVG_logo.svg"),
        },
        // {
        //   name: "La Trobe",
        //   logo: require("../../assets/images/clients/La_Trobe_University_logo.svg.png"),
        // },
        // {
        //   name: "University of Canberra",
        //   logo: require("../../assets/images/clients/university-of-canberra.png"),
        // },
        {
          name: "Swinburne",
          logo: require("../../assets/images/clients/220px-Logo_of_Swinburne_University_of_Technology.svg.png"),
        },
        // {
        //   name: "The University of Auckland",
        //   logo: require("../../assets/images/clients/uoa-logo-2015-colour.png"),
        // },
        {
          name: "Fisher & Paykel",
          logo: require("../../assets/images/clients/fisher-and-paykel.svg"),
        },
        // {
        //   name: "Origin",
        //   logo: require("../../assets/images/clients/Origin_Energy_logo.svg"),
        // },
        // {
        //   name: "Sensis",
        //   logo: require("../../assets/images/clients/sensis.png"),
        // },
        {
          name: "Agl",
          logo: require("../../assets/images/clients/AGL_Energy_logo.svg"),
        },
        {
          name: "Optus",
          logo: require("../../assets/images/clients/OPTUS_Teal_sRGB_RELEASE_03_310316.png"),
        },
        // {
        //   name: "Telstra Media",
        //   logo: require("../../assets/images/clients/TMediaLogo2.jpg"),
        // },
        {
          name: "ANZ",
          logo: require("../../assets/images/clients/ANZ-Logo-2009.svg"),
        },
        {
          name: "Tourism Australia",
          logo: require("../../assets/images/clients/Tourism_Australia_logo.svg"),
        },
        // {
        //   name: "Honda",
        //   logo: require("../../assets/images/clients/Honda_Logo.svg"),
        // },
        // {
        //   name: "Catay Pacific",
        //   logo: require("../../assets/images/clients/West_Kowloon_logo.svg"),
        // },
        // {
        //   name: "West Kownloon",
        //   logo: require("../../assets/images/clients/West_Kowloon_logo.svg"),
        // },
        // {
        //   name: "Allianz",
        //   logo: require("../../assets/images/clients/Allianz.svg.png"),
        // },
      ],
    });
    return {
      listOfPartners,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/partners.scss";
</style>
