<template>
  <b-container>
    <div id="app">
      <MenuNavigation :nav-links="navLinks" />
      <router-view />
    </div>
  </b-container>
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
import MenuNavigation from "@/components/MenuNavigation.vue"
export default {
  components: {
    MenuNavigation
  },
  data: () => ({
    navLinks: [{
        text: 'Home',
        path: '/'
      },
      {
        text: 'Shop',
        path: '/shop'
      },
      {
        text: 'About',
        path: '/about'
      },
      {
        text: 'Cart',
        path: '/cart'
      },
    ]
  })
}
</script>