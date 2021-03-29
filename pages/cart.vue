<template>
  <main class="container mt-4">
    <GoBack />
    <section v-if="cart.length">
      <b-table
        :data="cart"
        :columns="columns"
        checkable
        :checkbox-position="right"
      >
        <template #footer>
          <th class="is-hidden-mobile"></th>
          <th class="is-hidden-mobile"></th>
          <th class="is-hidden-mobile"></th>
          <th class="is-hidden-mobile"></th>
          <th class="is-hidden-mobile">
            {{ totalCount }}
          </th>
          <th>
            <div class="th-wrap">{{ priceFormatting(totalPrice) }}</div>
          </th>
        </template>
      </b-table>
    </section>
    <AppEmptyCart v-if="!cart.length" />
  </main>
</template>

<script>
import { priceFormatting } from "~/utils/format";

import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      columns: [
        {
          field: "item",
          label: "Title"
        },
        {
          field: "addons",
          label: "Addons"
        },
        {
          field: "option",
          label: "Option"
        },
        {
          field: "count",
          label: "Quantity"
        },
        {
          field: "combinedPrice",
          label: "Total Price($)"
        }
      ]
    };
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice", "totalCount"])
  },
  methods: {
    priceFormatting
  },
  head() {
    return {
      title: "Your Cart"
    };
  }
};
</script>

<style></style>
