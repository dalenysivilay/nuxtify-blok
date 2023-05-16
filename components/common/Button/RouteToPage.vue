<template>
  <NuxtLink :to="to" :aria-label="'Navigate to ' + to">
    {{ label }}
  </NuxtLink>
</template>
<script lang="ts">
export default defineNuxtComponent({
  props: {
    to: {
      type: String,
      default: '/',
      required: true,
    },
    label: {
      type: String,
      default: 'Route Button',
      required: true,
    },
  },
});
</script>
