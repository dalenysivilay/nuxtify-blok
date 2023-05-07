import { defineStore } from 'pinia';
import type { CartState } from '~/types/stores';

export const useCartStore = defineStore({
  id: 'cart',
  state: (): CartState => {
    return {
      cart: {
        checkoutUrl: null,
        estimatedCost: {
          subtotalAmount: {
            amount: '',
            currencyCode: 'USD',
          },
          totalTaxAmount: {
            amount: '',
            currencyCode: 'USD',
          },
          totalDutyAmount: {
            amount: '',
            currencyCode: 'USD',
          },
          totalAmount: {
            amount: '',
            currencyCode: 'USD',
          },
        },
        id: null,
        lines: {
          edges: [],
        },
      },
      loading: false,
      cartOpen: false,
    };
  },
  actions: {},
});
