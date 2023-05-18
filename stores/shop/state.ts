import type { ShopState } from '~/types/stores';

export const state = (): ShopState => {
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
};
