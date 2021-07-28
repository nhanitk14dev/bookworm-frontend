<template>
    <div class="shop-page">
        <b-row>
            <b-col md="2" sm="12">
                <h3>Filter By</h3>
                <div class="filter-item">
                    <h5 class="filter-title">Category</h5>
                    <v-select :options="options"></v-select>
                </div>
                <div class="filter-item">
                    <h5 class="filter-title">Author</h5>
                    <v-select :options="options"></v-select>
                </div>
                <div class="filter-item">
                    <h5 class="filter-title">Rating Review</h5>
                    <v-select :options="options"></v-select>
                </div>
            </b-col>
            <b-col md="10" sm="12">
                <div class="toolbar-sort clearfix">
                    <div class="showing-total">Showing 1-8 of 10 books</div>
                    <div class="group-sort">
                        <b-dropdown id="sort-sale" text="Sort by on sale" class="m-2">
                            <b-dropdown-item href="#">Sort by on sale</b-dropdown-item>
                            <b-dropdown-item href="#">Sort by on popularity</b-dropdown-item>
                            <b-dropdown-item href="#">Sort by price: low to high</b-dropdown-item>
                            <b-dropdown-item href="#">Sort by price: high to low</b-dropdown-item>
                        </b-dropdown>
                        <b-dropdown id="sort-records" text="Show 12" class="m-2">
                            <b-dropdown-item href="#">Show 6</b-dropdown-item>
                            <b-dropdown-item href="#">Show 12</b-dropdown-item>
                            <b-dropdown-item href="#">Show 24</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
                <b-row>
                    <b-col v-for="item in 12" :key="item" lg="4" md="6" xs="12">
                        <SingleBookCommon />
                    </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" offset-md="3">
                    <b-pagination
                        v-model="currentPage"
                        total-rows="100"
                        :per-page="perPage"
                        first-text="First"
                        prev-text="Prev"
                        next-text="Next"
                        last-text="Last"
                      >
                      </b-pagination>
                  </b-col>
                </b-row>

            </b-col>
        </b-row>
    </div>
</template>
<script>
import SingleBookCommon from "@/components/SingleBookCommon.vue";

export default {

  name: 'Shop',
  components: {
    SingleBookCommon
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.shop-page {
  margin-top: 10px;

  .filter-item {
    margin: 15px 0;
    padding: 2px;
    text-align: left;

    .filter-title {
      font-weight: 700;
    }
  }

  .toolbar-sort {
    display: block;
    height: auto;
    width: 100%;
    padding: 20px 10px;

    .group-sort {
      display: inline-flex;
    }

    @media (min-width: 768px) {
      .showing-total {
        float: left;
      }

      .group-sort {
        float: right;
      }
    }
  }
}
</style>