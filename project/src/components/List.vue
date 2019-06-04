<template>
  <v-layout row wrap v-if="searchResults">
    <ListItem v-for="movie in searchResults.data" :key="movie.imdbID" :movie="movie"/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";

import ListItem from "./ListItem.vue";
import { SearchResultT } from "../model";

@Component({
  components: {
    ListItem,
  },
})
export default class List extends Vue {
  @State("searchResults") searchResults!: SearchResultT;
}
</script>
