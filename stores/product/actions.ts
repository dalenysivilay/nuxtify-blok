import { useProductStore } from './product';

const productStore = useProductStore();

export const actions = {
  setSelectedVariantId(id: string) {
    productStore.selectedVariantId = id;
  },
  addToRecentlyViewed(id: string) {
    productStore.recentlyViewed.push(id);
  },
};
