<template>
  <div class="text-xs-center" v-if="searchResults">
    <v-pagination
      :disabled="pendingSearch"
      :value="Number(searchResults.page)"
      @input="handlePage"
      :length="searchResults.total_pages"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";

import { SearchResultT } from "../model";

@Component
export default class Pagination extends Vue {
  @State("page") page!: number;
  @State("searchResults") searchResults!: SearchResultT;
  @State("pendingSearch") pendingSearch!: boolean;
  @Mutation("setPage") setPage!: Function;
  @Action("getSearchResults") getSearchResults!: Function;

  handlePage(page: number) {
    this.setPage(page);
    this.getSearchResults();
  }
}
</script>
