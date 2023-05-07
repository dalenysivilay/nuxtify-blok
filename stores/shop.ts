import { defineStore } from 'pinia';
import type { ShopState } from '~/types/stores';

export const useShopStore = defineStore({
  id: 'shop',
  state: (): ShopState => {
    return {
      description: '',
      loading: false,
      localization: {
        country: {
          currency: {
            isoCode: 'USD',
          },
        },
      },
      menuOpen: false,
      moneyFormat: '$',
    };
  },
  actions: {},
});
