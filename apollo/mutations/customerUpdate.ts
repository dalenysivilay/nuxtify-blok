export const customerUpdate = gql`
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
      customer {
        acceptsMarketing
        email
        firstName
        lastName
        phone
      }
      customerAccessToken {
        accessToken
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;
