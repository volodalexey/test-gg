<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-title>Movie list</v-toolbar-title>

          <v-spacer></v-spacer>

          <form class="layout row" @submit.prevent="handleSubmit">
            <v-text-field :value="search" @input="handleInput($event)" label="Search"></v-text-field>
          </form>
        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { State, Mutation, Action } from "vuex-class";

import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchToolbar extends Vue {
  @State("search") search!: string;
  @Mutation("setSearch") setSearch!: Function;
  @Action("getSearchResults") getSearchResults!: Function;

  handleInput(value: string) {
    this.setSearch(value);
  }
  handleSubmit() {
    this.getSearchResults({ title: this.search, page: 1 });
  }
}
</script>
