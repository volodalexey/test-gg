<template>
  <v-list two-line>
    <template v-for="(item, index) in items">
      <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ListItem from "./ListItem.vue";

@Component({
  components: {
    ListItem,
  },
})
export default class List extends Vue {}
</script>
