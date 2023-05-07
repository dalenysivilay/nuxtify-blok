export const checkoutUrl = gql`
  query checkoutURL($cartId: ID!) {
    cart(id: $cartId) {
      checkoutUrl
    }
  }
`;
