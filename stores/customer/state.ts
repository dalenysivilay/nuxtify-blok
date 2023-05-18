import { CustomerState } from '~/types/stores';

export const state = (): CustomerState => {
  return {
    isLoggedIn: false,
    accessToken: null,
    customer: null,
    loading: false,
  };
};
