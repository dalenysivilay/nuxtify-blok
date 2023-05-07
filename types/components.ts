export interface Price {
  amount: number;
  currencyCode: string;
}

export interface PriceRange {
  minVariantPrice: Price;
  maxVariantPrice: Price;
}

export interface ProductCard {
  availableForSale?: boolean;
  compareAtPriceRange?: PriceRange;
  description?: string;
  handle: string;
  images: { [key: string]: unknown };
  priceRange?: PriceRange;
  productType?: { [key: string]: unknown };
  tags: string[];
  title: string;
  variants: object;
}

export interface VariantObject {
  availableForSale: boolean;
  id: string;
  quantityAvailable: number;
  sku: string;
  title: string;
}
export interface Variant {
  node: VariantObject;
}

export interface Option {
  id: string;
  name: string;
  values: string[];
}

export interface Amount {
  amount: string;
  currencyCode: string;
}
