<template>
  <button type="button" aria-label="Add To Cart Button" @click="addToCart">
    Add to Cart
  </button>
</template>
<script lang="ts">
export default defineNuxtComponent({
  quantity: {
    type: Number,
    default: 1,
    required: true,
  },
});
</script>
