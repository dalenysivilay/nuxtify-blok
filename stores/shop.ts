import { defineStore } from 'pinia';

export const useShopStore = defineStore({
  id: 'shop',
  state: (): ShopState => {
    return {
      description:
        'Effective Turf and Agriculture Products with Simple, Convenient, 24/7 Online Ordering.',
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
