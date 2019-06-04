import Vue from "vue";
import Vuex from "vuex";
import { searchQuery } from "../api";
import { SearchResultT } from "../model";

Vue.use(Vuex);

export type StateT = {
  search: string;
  page: number;
  pendingSearch: boolean;
  searchResults: SearchResultT | null;
  favorited: string[];
};

export const store = new Vuex.Store<StateT>({
  state: {
    search: "",
    page: 1,
    pendingSearch: false,
    searchResults: null,
    favorited: [],
  },
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
      state.page = 1;
    },
    setPage(state, payload) {
      state.page = payload;
    },
    setSearchPending(state, payload) {
      state.pendingSearch = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
    toggleFavorite(state, id: string) {
      if (state.favorited.includes(id)) {
        const idx = state.favorited.indexOf(id);
        if (idx > -1) {
          state.favorited.splice(idx, 1);
        }
      } else {
        state.favorited.push(id);
      }
    },
  },
  actions: {
    async getSearchResults({ commit, state }) {
      if (state.pendingSearch) {
        return state.pendingSearch;
      }

      commit("setSearchPending", true);
      try {
        const response = await searchQuery(state.search, String(state.page));
        commit("setSearchResults", response.data);
      } catch (err) {
        console.error(err);
      } finally {
        commit("setSearchPending", false);
      }
    },
  },
});
