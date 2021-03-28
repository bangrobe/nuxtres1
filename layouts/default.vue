<template>
  <div>
    <AppMenu />

    <div class="content">
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  }
};
</script>
<style>
html {
  font-family: "Mulish", arial, sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", arial, sans-serif;
}
</style>
