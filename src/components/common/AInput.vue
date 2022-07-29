<template>
  <input
    class="custom-input w-100 border-0 shadow-none"
    :placeholder="placeholder"
    type="text"
    name="input-field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "Type...",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/custom-input.scss";
</style>
