<template>
  <div id="app">
    <header>
      <MenuNavigation />
    </header>
    <b-container>
      <router-view />
    </b-container>
    <Footer />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
