import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    isDropdownOpen: false,
    isMobileMenuOpen: false,
  },
  getters: {
    funds: state => state.funds,
    isDropdownOpen: state => state.isDropdownOpen,
    isMobileMenuOpen: state => state.isMobileMenuOpen,
  },
  mutations: {
    toggleDropdown: state => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    toggleMobileMenu: state => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    }
  },
  actions: {
    toggleDropdown: context => context.commit('toggleDropdown'),
    toggleMobileMenu: context => context.commit('toggleMobileMenu'),
  },
  modules: {
    stocks
  }
});