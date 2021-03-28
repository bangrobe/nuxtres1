<template>
  <section
    class="masthead hero is-medium"
    role="img"
    aria-label="Image Description"
  >
    <div class="hero-body">
      <h2 class="has-text-centered title is-1 has-text-success">
        <AppLogo />
      </h2>
      <div class="buttons is-centered">
        <button class="is-centered button is-warning">
          See our restaurants
        </button>
      </div>
    </div>
  </section>
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
