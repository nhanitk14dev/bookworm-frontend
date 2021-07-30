<template>
  <b-container class="bv-example-row">
    <b-row v-if="recommendedBooks.length > 0">
      <b-col lg="3" md="6" sm="12"
        v-for="book in recommendedBooks"
        :key="book.id"
      >
        <SingleBookCommon
          :singleBook="book"
        />
      </b-col>
    </b-row>
    <b-row v-else>
      <h4>We don't have any book!!</h4>
    </b-row>
  </b-container>
</template>

<script>
import SingleBookCommon from "@/components/SingleBookCommon.vue";
import { mapState, mapActions } from 'vuex'
export default {
  name: "RecommendedBook",
  components: {
    SingleBookCommon,
  },
  props: ["singleBook"],
  computed: mapState({
    recommendedBooks: state => state.bookStore.recommendedBooks
  }),
  mounted() {
    this.$store.dispatch('bookStore/getRecommendedBooks');
  }
};
</script>
