<template>
  <v-flex class="custom-col">
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">Title: {{ movie.Title }}</div>
          <span>Year: {{ movie.Year }}</span>
          <span>IMDB: {{ movie.imdbID }}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark @click="handleClick(movie)">
          <v-icon v-if="isFavorited(movie)">star</v-icon>
          <v-icon v-else>star_border</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";

import { MovieT } from "../model";

@Component({})
export default class ListItem extends Vue {
  @Prop(Object) readonly movie!: MovieT;
  @State("favorited") favorited!: string[];
  @Mutation("toggleFavorite") toggleFavorite!: Function;
  isFavorited(movie: MovieT) {
    return this.favorited.includes(movie.imdbID);
  }
  handleClick(movie: MovieT) {
    this.toggleFavorite(movie.imdbID);
  }
}
</script>

<style lang="scss" scoped>
.custom-col {
  flex: 0 0 calc(100% / 5);
}
</style>