import Vue from "vue";
import Vuex from "vuex";
import { searchQuery } from "@/api";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    search: "",
    pendingSearch: false,
    searchResults: [],
  },
  mutations: {
    setSearch(state, payload) {
      state.search = payload;
    },
    setSearchPending(state, payload) {
      state.pendingSearch = payload;
    },
    setSearchResults(state, payload) {
      state.searchResults = payload;
    },
  },
  actions: {
    async getSearchResults({ commit, state }, { title, page }) {
      if (state.pendingSearch) {
        return state.pendingSearch;
      }

      commit("setSearchPending", true);
      commit("setSearchResults", []);
      try {
        const response = await searchQuery(title, page);
        commit("setSearchResults", response.data);
      } catch (err) {
        console.error(err);
      } finally {
        commit("setSearchPending", false);
      }
    },
  },
});
