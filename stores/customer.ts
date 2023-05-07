import { defineStore } from 'pinia';
import type { CustomerState } from '~/types/stores';

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
