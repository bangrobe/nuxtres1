<template>
  <client-only>
    <section
      class="masthead hero is-medium"
      role="img"
      aria-label="Image Description"
    >
      <div class="hero-body">
        <h2 class="has-text-centered title is-1 has-text-success">
          Nuxt Food
        </h2>
        <div class="buttons is-centered">
          <nuxt-link
            :to="{ path: '/restaurants' }"
            class="is-centered button is-warning"
          >
            See our restaurants
          </nuxt-link>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
export default {};
</script>

<style scoped>
.masthead {
  background-image: url(~/assets/header.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
</style>
