import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
import stocks from './modules/stocks';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isDropdownOpen: false,
    isMobileMenuOpen: false,
  },
  getters,
  mutations,
  actions,
  modules: {
    stocks
  }
});