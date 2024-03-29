export interface CartState {
  cart: {
    checkoutUrl: string | null;
    estimatedCost: {
      subtotalAmount: {
        amount: string;
        currencyCode: string;
      };
      totalTaxAmount: {
        amount: string;
        currencyCode: string;
      };
      totalDutyAmount: {
        amount: string;
        currencyCode: string;
      };
      totalAmount: {
        amount: string;
        currencyCode: string;
      };
    };
    id: string | null;
    lines: {
      edges: Array<unknown>;
    };
  };
  loading: boolean;
  cartOpen: boolean;
}

export interface CustomerState {
  isLoggedIn: boolean;
  accessToken: string | null;
  customer: Customer | null;
  loading: boolean;
}

export interface ProductState {
  selectedVariantId: string | undefined;
  recentlyViewed: string[];
}

export interface ShopState {
  description: string;
  loading: boolean;
  localization: {
    country: {
      currency: {
        isoCode: string;
      };
    };
  };
  menuOpen: boolean;
  moneyFormat: string;
}
