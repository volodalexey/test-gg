<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-title>Movie list</v-toolbar-title>

          <v-spacer></v-spacer>

          <form class="layout row" @submit.prevent="handleSubmit">
            <v-text-field
              :value="search"
              :disabled="pendingSearch"
              @input="handleInput($event)"
              label="Search"
            ></v-text-field>
          </form>
        </v-toolbar>
      </v-card>
    </v-flex>

    <v-snackbar v-model="snackbar">No result found for {{search}} !</v-snackbar>
  </v-layout>
</template>

<script lang="ts">
import { State, Mutation, Action } from "vuex-class";

import { Component, Vue } from "vue-property-decorator";

import { SearchResultT } from "../model";

@Component
export default class SearchToolbar extends Vue {
  snackbar: boolean = false;
  @State("search") search!: string;
  @State("pendingSearch") pendingSearch!: boolean;
  @State("searchResults") searchResults!: SearchResultT;
  @Mutation("setSearch") setSearch!: Function;
  @Action("getSearchResults") getSearchResults!: Function;

  handleInput(value: string) {
    this.setSearch(value);
  }
  handleSubmit() {
    this.getSearchResults().then(() => {
      if (!this.searchResults.data.length) {
        this.snackbar = true;
      }
    });
  }
}
</script>
