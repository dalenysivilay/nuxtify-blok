import { ProductState } from '~/types/stores';

export const state = (): ProductState => {
  return {
    selectedVariantId: undefined,
    recentlyViewed: [],
  };
};
