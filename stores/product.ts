import { defineStore } from 'pinia';
import type { ProductState } from '~/types/stores';

export const useProductStore = defineStore({
  id: 'product',
  state: (): ProductState => {
    return {
      selectedVariantId: undefined,
      recentlyViewed: [],
    };
  },
  actions: {
    setSelectedVariantId(id: string) {
      this.selectedVariantId = id;
    },
    addToRecentlyViewed(id: string) {
      this.recentlyViewed.push(id);
    },
  },
});
