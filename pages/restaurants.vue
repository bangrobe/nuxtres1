<template>
  <div>
    <main class="container">
      <app-select @change="selectedRestaurant = $event"></app-select>
      <app-restaurant-info
        :datasource="filteredRestaurants"
      ></app-restaurant-info>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      selectedRestaurant: ""
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter(el => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    }
  }
};
</script>
