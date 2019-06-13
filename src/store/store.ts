import Vue from 'vue';
import { RootState } from './types';
import { auth, playlist } from './modules';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    auth,
    playlist
  }
};

export default new Vuex.Store<RootState>(store);
