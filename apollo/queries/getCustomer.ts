export const getCustomer = gql`
  query ($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`;
