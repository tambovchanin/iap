import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './types';
import { auth } from './modules';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    auth
  }
});
