<template>
  <div class="our-team">
    <p class="our-team__title text-center">LIFE@ANCHORA</p>
    <h2 class="our-team__sub-title text-center">
      We <span>love</span> our team.
    </h2>
    <p class="our-team__description text-center">
      Retaining the best talent is easier when you have these great "Anchors"
    </p>
    <div class="our-team__container d-lg-flex justify-content-between">
      <div class="our-team__background" />
      <div class="our-team__accordion ps-md-5 position-relative">
        <div
          v-for="(item, index) in accordionItems"
          :key="index"
          class="our-team__accordion-item py-4"
          :class="item.open ? 'our-team__active-item' : ''"
          @click="openAccordionItem(item)"
        >
          <div class="our-team__accordion-header d-flex">
            <img
              class="our-team__accordion-logo me-2"
              src="@/assets/images/anchora-logo-square-transparent.png"
              alt="logo"
            />
            <p class="our-team__accordion-title mb-0">Deliver expertise</p>
          </div>
          <p
            class="our-team__accordion-description overflow-hidden ps-3 ms-3 pt-2"
            :class="item.open ? 'visible' : 'visually-hidden'"
            :style="{
              height: item.open ? '70px !important' : '0px !important',
            }"
          >
            We are recognised for our strategic expertise in MarTech; we don't
            exist unless we are delivering quality outcomes.
          </p>
        </div>
      </div>
    </div>
    <div class="mx-5 pb-5">
      <div
        class="our-team__about d-flex justify-content-center text-white flex-column"
      >
        <p class="our-team__title-bg">
          Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>.
          Vivamus feugiat nibh et magna sollicitudin, nec efficitur risus
          vehicula.
        </p>
        <p class="our-team__author">JANE DOE</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "OurTeam",
  setup() {
    const accordionItems = ref([
      {
        id: 1,
        open: true,
        title: "Deliver expertise",
        description:
          "We are recognised for our strategic expertise in MarTech; we don't exist unless we are delivering quality outcomes.\n",
      },
      {
        id: 2,
        open: false,
        title: "Invest in trusted partnerships",
        description:
          "We are recognised for our strategic expertise in MarTech; we don't exist unless we are delivering quality outcomes.\n",
      },
      {
        id: 3,
        open: false,
        title: "Lead through learning",
        description:
          "We are recognised for our strategic expertise in MarTech; we don't exist unless we are delivering quality outcomes.\n",
      },
      {
        id: 4,
        open: false,
        title: "Are connected and supported ",
        description:
          "We are recognised for our strategic expertise in MarTech; we don't exist unless we are delivering quality outcomes.\n",
      },
    ]);
    const openAccordionItem = (item) => {
      accordionItems.value = accordionItems.value.map((el) => {
        return { ...el, open: el.id === item.id };
      });
    };
    return {
      accordionItems,
      openAccordionItem,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/our-team.scss";
</style>
