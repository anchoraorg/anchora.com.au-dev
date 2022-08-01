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
            <p class="our-team__accordion-title mb-0">{{ item.title }}</p>
          </div>
          <p
            class="our-team__accordion-description overflow-hidden ps-3 ms-3 pt-2"
            :class="item.open ? 'visible' : 'visually-hidden'"
            :style="{
              height: item.open ? '70px !important' : '0px !important',
            }"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mx-5 pb-5">
      <div
        class="our-team__about d-flex justify-content-center text-white flex-column"
      >
        <div v-for="item in quotes" :key="item.name">
          <p class="our-team__title-bg quote">{{ item.description }}</p>
          <p class="our-team__author">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "OurTeam",
  setup() {
    const quotes = ref([
      {
        description:
          "Anchora is the best place I have worked at in 20 years of working. I am very proud to join this business.",
        name: "Anchora Employee",
      }
    ]);
    const accordionItems = ref([
      {
        id: 1,
        open: true,
        title: "Deliver expertise",
        description:
          "We are recognised for our strategic and executional expertise in the Adobe stack; we don't exist unless we are delivering quality outcomes.",
      },
      {
        id: 2,
        open: false,
        title: "Invest in trusted partnerships",
        description:
          "Our ability to propose and deliver innovative soolution is only possible by establishing string, trusted partnerships with our clients and Adobe. We must be foccused on long lasting and meaningful relationships with our clients and partners.",
      },
      {
        id: 3,
        open: false,
        title: "Lead through learning",
        description:
          "Surrounder by smart people and deep expertise, we want to always be learning, trying new tand sharing our knowldge, with each other and as though leaders in our field.",
      },
      {
        id: 4,
        open: false,
        title: "Are connected and supported ",
        description:
          "We enjoy autonomy but don't work alone. We like feeling connect and supported because we know t hat value is created collaboratively and not build in a vacuum.",
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
      quotes,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/our-team.scss";
</style>
