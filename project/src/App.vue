<template>
  <div id="app">
    <SearchToolbar/>
    <List/>
  </div>
</template>

<script lang="ts">
import "vuetify/dist/vuetify.min.css";
import { Component, Vue } from "vue-property-decorator";

import SearchToolbar from "./components/SearchToolbar.vue";
import List from "./components/List.vue";

@Component({
  components: {
    SearchToolbar,
    List,
  },
})
export default class App extends Vue {}
</script>
