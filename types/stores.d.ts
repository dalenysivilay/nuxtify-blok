interface CartState {
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

interface CustomerState {
  isLoggedIn: boolean;
  accessToken: string | null;
  customer: Customer | null;
  loading: boolean;
}

interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  acceptsMarketing: boolean;
}

interface CreateCustomerInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  acceptsMarketing?: boolean;
}

interface UpdateCustomerInput {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  acceptsMarketing?: boolean;
}

interface SignInInput {
  email: string;
  password: string;
}

interface ProductState {
  selectedVariantId: string | undefined;
  recentlyViewed: string[];
}

interface ShopState {
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
