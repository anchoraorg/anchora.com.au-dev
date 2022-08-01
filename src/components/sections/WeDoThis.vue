<template>
  <div class="we-do-this">
    <h1 class="we-do-this__title text-center">WE DO THIS</h1>
    <p class="we-do-this__sub-title text-center mx-auto pb-5 mb-4">
      We integrate data and experience to provide
      <span>meaningful interactions</span>
      between brands and <br />
      your customers
    </p>
    <div class="we-do-this__card">
      <div
        class="we-do-this__item mb-3"
        v-for="(item, index) in listOfItems"
        :key="index"
      >
        <div class="d-flex justify-content-center">
          <img
            class="mx-auto"
            :src="require(`@/assets/images/we-do-this/${item.icon}.svg`)"
            alt="item"
          />
        </div>
        <p :style="{ color: item.color }" class="text-center">
          {{ item.title }}
        </p>
        <p class="text-center we-do-this__card-subtitle">
          {{ item.subtitle }}
          <a
            v-if="item.readmore"
            href="#"
            data-bs-toggle="modal"
            :data-bs-target="'#readmore-' + item.icon"
            >Read more.</a
          >
        </p>
        <!-- <p
          class="readmore collapse"
          :id="'readmore-' + item.icon"
          v-html="item.readmore"
        ></p> -->
        <div
          class="modal fade"
          :id="'readmore-' + item.icon"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{ item.title }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body" v-html="item.readmore"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "WeDoThis",
  setup() {
    const listOfItems = ref([
      {
        icon: "setting",
        title: "Marketing Technology",
        subtitle:
          "Anchora is the leading Marketing Technology and Customer Experience consultancy in APAC.",
        readmore: `Anchora is a true digital partner to your business and team, delivering together on the <strong>Business Discovery and Planning, Implementations/Integrations, Training and Enablement, Hyper-care, Ongoing Drive Success and Full Services</strong>. Our Leading MarTech specialists are industry renowned in:<br>
<ul><li>Content and Digital Assets Management (CMS)</li>
<li>Customer Data Management (CDP)</li>
<li>Web and Mobile Tracking and Analytics</li>
<li>Omni-channel Marketing Automation and Lifecycle Campaign Management</li>
<li>Cross Channel Conversation Rate Optimization and Personalization (CRO)</li></ul>`,
        color: "#62C6E7",
      },
      {
        icon: "edit",
        title: "Advertising Technology",
        subtitle:
          "Anchora has superior capability and experience in Advertising Technology.",
        readmore: `Anchora understands that Customer Experience is dynamic across all channels and key for brands to elevate and differentiate themselves; especially to create brand awareness, attracting the traffic and volume and lead acquisition. Our team covers the Advertising Technology implementation and full services.
<ul>
<li>Advertising Cloud ( Adobe ) Implementation</li>
<li>Search Ads buying best practice guidance and full services</li>
<li>Social Ads buying best practice guidance and full services</li>
<li>Display/AVOD/Programmatic TV Ads buying best practice guidance and full services</li>
</ul>`,
        color: "#E26245",
      },
      {
        icon: "database",
        title: "Data Practice and Decisioning",
        subtitle: "Anchora has a very mature and advanced Data Practice.",
        readmore: `
        Data holds currency in the digital and customer experience world; we understand how important the data is to our clients’ business, therefore we are we are the partner to help our clients understand their customers, make the right decisions, and take the best actions to deliver the right and relevant content, to the right audience, at the right time, via the right channel.
 
Our team covers the key Data and Decisioning practices.
<ul>
<li>Data Analytics and Audience Modelling</li>
<li>Data Structure Design, Architect, and Integration</li>
<li>Data Flow Integration</li>
<li>Data Decisioning</li>
<li>Predicative Analytics and Propensity Modelling</li>
<li>Next Best Actions</li>
<li>AI and ML</li>
</ul>`,
        color: "#D89FC5",
      },
      {
        icon: "flag",
        title: "Strategic Planning and Consultancy",
        subtitle:
          "Anchora’s strategic capabilities is what sets us apart. We are masters of asking “WHY”. ",
        readmore: `
Anchora leads with “why” – thus aligning business goals and objectives to valued outcomes. Solutions need to solve client problems, and deliver value against business cases. Anchora prevents waste by ensuring clear and robust strategy aligns to goals. Our experience of more than 90 years can elicit the needs and deliver value.
<ul class="readmore">
<li>Strategic Business Discovery and Planning – Current State, Challenges, Future State and Priorities</li>
<li>Business and Technology Architect</li>
<li>Reverse Briefing</li>
<li>Thought leadership Consulting</li>
<li>Best Practice Consulting</li>
<li>Dedicated Strategic Account Management</li>
<li>Business Reviews – Monthly or Quarterly</li>
<li>Client Maturity Assessment and Development</li>
<li>Client Enablement and Training</li>
<li>Operation Process and Change Management Support</li>
</ul>
        `,
        color: "#F1B437",
      },
    ]);
    return {
      listOfItems,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/we-do-this.scss";
</style>
