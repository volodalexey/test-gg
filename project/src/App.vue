<template>
  <div id="app">
    <SearchToolbar/>
    <Pagination/>
    <List/>
  </div>
</template>

<script lang="ts">
import "vuetify/dist/vuetify.min.css";
import { Component, Vue } from "vue-property-decorator";

import SearchToolbar from "./components/SearchToolbar.vue";
import Pagination from "./components/Pagination.vue";
import List from "./components/List.vue";

@Component({
  components: {
    SearchToolbar,
    Pagination,
    List,
  },
})
export default class App extends Vue {}
</script>
