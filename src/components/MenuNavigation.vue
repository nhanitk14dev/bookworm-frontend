<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item v-for="(link, index) in navLinks" :key="index">
          <router-link :to="link.path">
            {{ link.text }}
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Shop",
        path: "/shop",
      },
      {
        text: "About",
        path: "/about",
      },
      {
        text: "Cart",
        path: "/cart",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.navbar {
  a {
    color: white;
    font-weight: 400;
    &:hover {
      color: orange;
      text-decoration: none;
    }
  }
  .router-link-exact-active {
    color: orange;
  }
}
</style>
