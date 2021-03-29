<template>
  <div>
    <AppHeader />
    <main class="container mt-4">
      <app-restaurant-info
        v-if="fooddata.length"
        :datasource="fooddata"
      ></app-restaurant-info>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapState(["fooddata"])
  },
  head() {
    return {
      title: "Homepage"
    };
  }
};
</script>
