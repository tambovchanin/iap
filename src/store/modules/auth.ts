import { GetterTree, ActionTree, MutationTree, Module } from 'vuex';
import { AuthState, RootState } from '../types';
import { Auth } from '../mutations';
import axios, { AxiosResponse, AxiosError } from 'axios';

const state: AuthState = {
  token: localStorage.getItem('user-token') || '',
  status: ''
};

const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: (s: AuthState) => !!s.token,
  authStatus: (s: AuthState) => s.status
};

const actions: ActionTree<AuthState, RootState> = {
  [Auth.Request]: ({ commit }, user: { username: string, password: string }) => {
    return new Promise((resolve, reject) => {
      commit(Auth.Request);
      axios({ url: 'auth', data: user, method: 'POST' })
        .then((resp: AxiosResponse) => {
          const token = resp.data.token;
          localStorage.setItem('user-token', token) ;
          commit(Auth.Success, token);
          resolve(resp);
        })
      .catch((err: AxiosError) => {
        commit(Auth.Error, err);
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

const mutations: MutationTree<AuthState> = {
  [Auth.Request]: (s: AuthState) => {
    s.status = 'loading';
  },
  [Auth.Success]: (s: AuthState, token: string) => {
    s.status = 'success';
    s.token = token;
    s.hasLoadedOnce = true;
  },
  [Auth.Error]: (s: AuthState) => {
    s.status = 'error';
    s.hasLoadedOnce = true;
  },
  [Auth.Logout]: (s: AuthState) => {
    s.token = '';
  }
};

export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  actions,
  mutations
};

// export const auth: StoreOptions<RootState> = {
//   state,
//   getters,
//   actions,
//   mutations
// };
