<template>
  <v-flex xs4>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">Title: {{ movie.Title }}</div>
          <span>Year: {{ movie.Year }}</span>
          <span>IMDB: {{ movie.imdbID }}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark>Listen now</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { MovieT } from "../model";

@Component({})
export default class ListItem extends Vue {
  @Prop(Object) readonly movie!: MovieT;
  toggle() {}
}
</script>
