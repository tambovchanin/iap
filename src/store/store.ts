import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
// import { profile } from './profile/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    token: localStorage.getItem('user-token') || '',
    status: ''
  },
  modules: {
    // profile
  }
};

export default new Vuex.Store<RootState>(store);
