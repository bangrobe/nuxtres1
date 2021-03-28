<template>
  <section class="restaurantInfo">
    <div class="columns" v-for="store in datasource" :key="store.id">
      <!--RESTAURANT INFO BOX-->
      <div class="column">
        <div class="box has-background-light">
          <h2>{{ store.name }}</h2>
          <span class="button is-primary is-rounded"
            >Delivery time: {{ store.deliveryTime }}</span
          >
          <span
            class="button is-danger is-normal is-rounded"
            v-if="store.freeDelivery"
          >
            FREE SHIP
          </span>
          <span class="button is-warning is-normal is-rounded">
            Rating: {{ store.rating }}
          </span>
        </div>
        <div class="columns is-variable is-2-mobile">
          <div
            class="column is-one-third"
            v-for="dish in store.dishes"
            :key="dish.id"
          >
            <div class="card">
              <!--Card Image-->
              <div class="card-image">
                <div class="image is-4by3">
                  <img :src="`${getStrapiMedia(dish.image[0].url)}`" />
                </div>
              </div>
              <!--Card content-->
              <div
                class="card-content is-flex is-justify-content-space-between"
              >
                <div>
                  <span class="is-block has-text-weight-bold">{{
                    dish.item
                  }}</span>
                  <span class="has-text-danger has-text-weight-light">
                    {{ priceFormatting(dish.price) }}
                  </span>
                </div>
                <div>
                  <nuxt-link class="button" :to="`/items/${dish.id}`">
                    View Item>>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--RESTAURANT MENU-->
    </div>
  </section>
</template>

<script>
//Method noi strapi URL voi media URL
import { getStrapiMedia, priceFormatting } from "~/utils/format";

export default {
  props: {
    datasource: {
      type: [Array, Object]
    }
  },
  methods: {
    getStrapiMedia,
    priceFormatting
  }
};
</script>

<style>
@media screen and (max-width: 1023px) {
  .column {
    padding: 1.5rem;
  }
}
</style>
