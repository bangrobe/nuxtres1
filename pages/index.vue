<template>
  <div>
    <AppHeader />
    <main class="container mt-4">
      <app-restaurant-info :datasource="fooddata"></app-restaurant-info>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePage",
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>
