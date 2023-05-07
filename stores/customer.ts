import { defineStore } from 'pinia';

export const useCustomerStore = defineStore({
  id: 'customer',
  state: (): CustomerState => {
    return {
      isLoggedIn: false,
      accessToken: null,
      customer: null,
      loading: false,
    };
  },
  actions: {},
});
