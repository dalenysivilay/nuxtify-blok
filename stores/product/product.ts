import { defineStore } from 'pinia';
import { state } from './state';
import { actions } from './actions';
import { getters } from './getters';

export const useProductStore = defineStore({
  id: 'product',
  state,
  actions,
  getters,
});
