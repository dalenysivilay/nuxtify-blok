import { CartState } from '~/types/stores';

export const state = (): CartState => {
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
};
