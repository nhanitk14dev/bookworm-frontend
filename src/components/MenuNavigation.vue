<template>
    <div>
        <b-navbar type="dark" variant="dark">
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
  props: ['navLinks'],
}
</script>
<style lang="css" scoped>
</style>