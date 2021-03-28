<template>
  <main class="container mt-4">
    <div class="is-flex is-justify-content-space-between">
      <GoBack />
      <app-toast>
        <b-notification
          v-model="isNotification"
          type="is-info"
          aria-close-label="Close notification"
        >
          Order submitted. Buy more in
          <nuxt-link to="/restaurants">restaurants</nuxt-link>
        </b-notification>
      </app-toast>
    </div>

    <div class="columns">
      <div class="column">
        <!--IMAGE-->
        <div class="image">
          <img :src="getStrapiMedia(currentItem.image[0].url)" />
        </div>
        <div class="panel mt-4">
          <p class="panel-heading is-info mb-0">Description</p>
          <div class="panel-block">
            <p v-html="currentItem.description"></p>
          </div>
        </div>
        <!--DESCRIPTION-->
      </div>
      <div class="column">
        <div class="box">
          <!--NAME-->
          <p class="is-size-4 mb-1">{{ currentItem.item }}</p>
          <!--PRICE-->
          <p class="has-text-danger">
            ${{ priceFormatting(currentItem.price) }}
          </p>
          <!--ADD TO CARD --->
          <div class="control">
            <input
              class="is-info"
              style="width: 48px; height: 30px;"
              type="number"
              min="1"
              value="1"
              v-model="count"
            />
            <button @click="onSubmit" class="button is-small is-primary">
              Add to cart ${{ combinedPrice }}
            </button>
          </div>
        </div>
        <!---ADDONS-->
        <div v-if="currentItem.addOns" class="panel is-link">
          <p class="panel-heading mb-0">
            Addons
          </p>
          <div class="panel-block">
            <fieldset>
              <div v-for="addon in currentItem.addOns" :key="addon">
                <!-- <input
                  :id="addon"
                  type="checkbox"
                  name="addon"
                  :value="addon"
                  v-model="itemAddons"
                />
                <label :for="addon">
                  {{ addon.charAt(0).toUpperCase() + addon.slice(1) }}</label
                > -->
                <b-field>
                  <b-checkbox :native-value="addon" v-model="itemAddons">{{
                    addon.charAt(0).toUpperCase() + addon.slice(1)
                  }}</b-checkbox>
                </b-field>
              </div>
            </fieldset>
          </div>
        </div>
        <!--OPTIONS-->
        <div v-if="currentItem.options" class="panel is-warning">
          <p class="panel-heading mb-0">
            Options
          </p>
          <div class="panel-block">
            <fieldset>
              <div v-for="option in currentItem.options" :key="option">
                <!-- <input
                  :id="option"
                  type="radio"
                  name="option"
                  :value="option"
                  v-model="itemOption"
                />
                <label :for="option"> {{ option }}</label> -->
                <b-radio
                  v-model="itemOption"
                  name="option"
                  :native-value="option"
                >
                  {{ option }}
                </b-radio>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { getStrapiMedia, priceFormatting } from "~/utils/format";
export default {
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemOption: "",
      itemAddons: [],
      itemSizeAndCost: [],
      cartSubmitted: false,
      isNotification: false
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    currentItem() {
      let result;
      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].dishes.length; j++) {
          if (this.fooddata[i].dishes[j].id === this.id) {
            result = this.fooddata[i].dishes[j];
            break;
          }
        }
      }
      return result;
    },
    combinedPrice() {
      let total = this.count * this.currentItem.price;
      return total.toFixed(2);
    }
  },
  methods: {
    getStrapiMedia,
    priceFormatting,
    onSubmit() {
      this.isNotification = true;
      const formOutput = {
        item: this.currentItem.item,
        count: this.count,
        option: this.itemOption,
        addons: this.itemAddons,
        combinedPrice: this.combinedPrice
      };
      this.$store.commit("ADD_TO_CART", formOutput);
    }
  }
};
</script>

<style></style>
