<template>
  <div class="box mt-4 is-flex is-justify-content-space-between">
    <div>
      <h2 class="is-2 mb-0">RESTAURANTS</h2>
    </div>
    <div>
      <label :for="select" style="line-height: 2.5;"
        >Which is your favorite {{ select }}</label
      >
      <div class="select">
        <select
          @change="$emit('change', $event.target.value)"
          :name="select"
          :id="select"
        >
          <option value>--Please select a {{ select }}--</option>
          <option v-for="option in selectOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "cuisine"
    },
    selectOptions: {
      type: Array,
      default: () => ["taco", "pizza", "dim sum"]
    }
  }
};
</script>

<style></style>
