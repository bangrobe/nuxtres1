<template>
  <div class="has-background-primary">
    <b-navbar class="container is-primary">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h1 class="is-1"><AppLogo /></h1>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/restaurants' }">
          Restaurants
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/cart' }">
          Cart
          <span class="ml-2 tag is-small is-rounded">{{ totalCount }}</span>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["totalCount"])
  }
};
</script>

<style></style>
