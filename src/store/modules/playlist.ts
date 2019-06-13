import { Playlist } from '../mutations';
import { RootState, PlaylistState } from '../types';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { GetterTree, ActionTree, MutationTree, Module } from 'vuex';

const state: PlaylistState = {
  playlist: {},
  status: ''
};

const getters: GetterTree<PlaylistState, RootState> = {
  playlist: (s: PlaylistState) => s.playlist,
  status: (s: PlaylistState) => s.status
};

const actions: ActionTree<PlaylistState, RootState> = {
  [Playlist.Request]: ({ commit }, id: number) => {
    return new Promise((resolve, reject) => {
      // commit(Playlist.Changed, id);
      axios.get('playlists', { params: { id } })
        .then((resp: AxiosResponse) => {
          const entry = resp.data;
          commit(Playlist.Success, entry);
          resolve(resp);
        })
      .catch((err: AxiosError) => {
        commit(Playlist.Error, err);
        reject(err);
      });
    });
  }
};

const mutations: MutationTree<PlaylistState> = {
  // [Playlist.Changed]: (s: PlaylistState, id: number) => {
  //   s.status = 'loading';
  //   s.playlist.id = id;
  // },
  [Playlist.Success]: (s: PlaylistState, entry: any) => {
    s.status = 'success';
    s.playlist = entry;
  },
  [Playlist.Error]: (s: PlaylistState) => {
    s.status = 'error';
  }
};

export const playlist: Module<PlaylistState, RootState> = {
  state,
  getters,
  actions,
  mutations
};
