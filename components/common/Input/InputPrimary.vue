<template>
  <input
    :type="type"
    :label="label"
    :placeholder="placeholder"
    :aria-label="placeholder"
  />
</template>
<script lang="ts">
export default defineNuxtComponent({
  props: {
    type: {
      type: String,
      default: 'text',
      required: true,
    },
    label: {
      type: String,
      default: '',
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
      required: true,
    },
  },
});
</script>
