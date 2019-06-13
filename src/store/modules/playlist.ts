import { Playlist } from '../mutations';
import { RootState, PlaylistState } from '../types';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { GetterTree, ActionTree, MutationTree, Module } from 'vuex';

const state: PlaylistState = {
  id: null,
  list: [],
  status: ''
};

const getters: GetterTree<PlaylistState, RootState> = {
  listId: (s: PlaylistState) => s.id
};

const actions: ActionTree<PlaylistState, RootState> = {
  [Playlist.Request]: ({ commit }, id: number) => {
    return new Promise((resolve, reject) => {
      commit(Playlist.Changed, id);
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
  [Playlist.Changed]: (s: PlaylistState, id: number|null) => {
    s.status = 'loading';
    s.id = id;
  },
  [Playlist.Success]: (s: PlaylistState, songs: any[]) => {
    s.status = 'success';
    s.list = songs;
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
