<template>
  <div id="app">
    <header>
      <MenuNavigation />
    </header>
    <b-container>
      <div class="contents">
        <router-view />
      </div>
    </b-container>
    <Footer />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .contents {
    padding: 20px 0;
  }
}
</style>
<script>
import MenuNavigation from "@/components/MenuNavigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    MenuNavigation,
    Footer,
  },
};
</script>
