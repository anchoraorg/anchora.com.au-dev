<template>
  <div class="footer">
    <div class="footer__top py-4 d-flex align-items-center">
      <div class="footer__top-left d-flex align-items-center">
        <img
          class="pe-2 footer__logo"
          src="@/assets/images/anchora-logo-white.svg"
          alt="logo"
        />
        <h2 class="footer__title mb-0">Anchora</h2>
      </div>
      <div class="footer__top-right">
        <p class="mb-0 footer__top-description d-none d-md-block">
          Strategic Marketing Technology Consultancy
        </p>
      </div>
    </div>
    <div class="footer__bottom d-md-flex">
      <div
        class="footer__bottom-left d-flex justify-content-md-start justify-content-between"
      >
        <div>
          <p class="footer__bottom-title mb-0">VISIT US</p>
          <p class="footer__bottom-subtitle">
            The Commons <br />
            QV 3 Albert Coates Lane, <br />
            Melbourne VIC 3000
          </p>
        </div>
        <div class="ms-5 ps-5">
          <p class="footer__bottom-title mb-0">HOURS</p>
          <p class="footer__bottom-subtitle">
            Mon to Fri: 9:00 am – 5:00 pm <br />Sat to Sun: Closed
          </p>
        </div>
      </div>
      <div
        class="footer__bottom-right d-none d-md-flex justify-content-md-start justify-content-between"
      >
        <!-- <ul class="footer__bottom-list p-0">
          <li class="footer__bottom-item">PHILOSOPHY</li>
          <li class="footer__bottom-item">APPROACH</li>
          <li class="footer__bottom-item">BLOG</li>
        </ul> -->
        <ul class="footer__bottom-list p-0 ps-5 ms-5">
          <!-- <li class="footer__bottom-item">PRODUCTS</li>
          <li class="footer__bottom-item">TEAM</li> -->
          <li class="footer__bottom-item"><a href="https://www.linkedin.com/company/anchora-consulting/">LINKEDIN</a></li>
        </ul>
      </div>
      <p class="mb-0 footer__top-description d-block d-md-none my-4">
        Strategic Marketing Technology <br />
        Consultancy
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/footer.scss";
</style>
