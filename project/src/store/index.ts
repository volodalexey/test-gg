import Vue from "vue";
import Vuex from "vuex";
import { searchQuery } from "@/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
