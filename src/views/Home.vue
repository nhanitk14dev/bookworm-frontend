<template>
  <div class="home-page">
    <div class="top-buttons">
      <div class="float-left">
        <h3>On Sale</h3>
      </div>
      <div class="float-right">
        <router-link to="/shop">
          <button type="button" class="btn btn-primary">View All</button>
        </router-link>
      </div>
    </div>
    <div class="clearfix"></div>
    <SliderHome />
    <div>
      <h3 class="text-center">Featured Book</h3>
      <b-card no-body>
        <b-tabs content-class="mt-3" align="center" pills card>
          <b-tab title="Recommend" active>
            <RecommendedBook />
          </b-tab>
          <b-tab title="Popular">
            <PopularBook />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SliderHome from "@/components/SliderHome.vue";
import RecommendedBook from "@/components/RecommendedBook.vue";
import PopularBook from "@/components/PopularBook.vue";

export default {
  name: "Home",
  components: {
    SliderHome,
    RecommendedBook,
    PopularBook,
  },
};
</script>

<style lang="scss" scoped>
.top-buttons {
  margin: 25px 15px;
}
</style>
