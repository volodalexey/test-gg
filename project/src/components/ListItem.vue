<template>
  <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
      <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>

      <v-icon v-else color="yellow darken-2">star</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ListItem extends Vue {}
</script>
