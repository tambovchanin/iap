import Vue from 'vue';
import Vuex, { StoreOptions, GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '../types';
import { Auth } from '../actions';
import axios, { AxiosResponse, AxiosError } from 'axios';

Vue.use(Vuex);

const state: RootState = {
  token: localStorage.getItem('user-token') || '',
  status: ''
};

const getters: GetterTree<RootState, RootState> = {
  isAuthenticated: (s: RootState) => !!s.token,
  authStatus: (s: RootState) => s.status
};

const actions: ActionTree<RootState, RootState> = {
  [Auth.Request]: ({ commit }, user: { username: string, password: string }) => {
    return new Promise((resolve, reject) => {
      commit(Auth.Request);
      axios({ url: 'auth', data: user, method: 'POST' })
        .then((resp: AxiosResponse) => {
          const token = resp.data.token;
          // store the token in localstorage
          localStorage.setItem('user-token', token) ;
          commit(Auth.Success, token);
          // you have your token, now log in your user :)
          resolve(resp);
        })
      .catch((err: AxiosError) => {
        commit('AUTH_ERROR', err);
        localStorage.removeItem('user-token');
        reject(err);
      });
    });
  },
  [Auth.Logout]: ({ commit }) => {
    return new Promise((resolve) => {
      commit(Auth.Logout);
      localStorage.removeItem('user-token');
      resolve();
    });
  }
};

const mutations: MutationTree<RootState> = {
  [Auth.Request]: (s: RootState) => {
    s.status = 'loading';
  },
  [Auth.Success]: (s: RootState, token: string) => {
    s.status = 'success';
    s.token = token;
    s.hasLoadedOnce = true;
  },
  [Auth.Error]: (s: RootState) => {
    s.status = 'error';
    s.hasLoadedOnce = true;
  },
  [Auth.Logout]: (s: RootState) => {
    s.token = '';
  }
};

export const auth: StoreOptions<RootState> = {
  state,
  getters,
  actions,
  mutations
};
