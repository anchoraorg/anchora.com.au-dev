<template>
  <div class="home">
    <Preview />
    <WeDoThis id="we-do-this" />
    <Partners />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Preview from "@/components/sections/Preview";
import WeDoThis from "@/components/sections/WeDoThis";
import Partners from "@/components/sections/Partners";
export default defineComponent({
  name: "Home",
  components: { Partners, WeDoThis, Preview },
});
</script>
