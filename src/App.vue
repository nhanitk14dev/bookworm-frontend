<template>
    <div id="app">
        <b-container>
            <MenuNavigation 
            :nav-links="navLinks"
            />
        </b-container>
        <router-view />
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