<template>
  <div id="slider-home">
    <carousel
      :autoplay="true"
      :items="4"
      :margin="10"
      :responsive="responsiveCarousel"
      :center="false"
      loop
      v-if="discountBooks.length > 0"
    >
    <SingleBookCommon 
      v-for="book in discountBooks"
      :key="book.id" 
      :singleBook="book"
    />
    </carousel>
  </div>
</template>

<script>
import SingleBookCommon from "@/components/SingleBookCommon.vue";
import carousel from "vue-owl-carousel";
import { mapState, mapActions } from 'vuex'
export default {
  name: "SliderHome",
  props: ["singleBook"],
  components: {
    SingleBookCommon,
    carousel,
    singleBook: {}
  },
  data() {
    return {
      responsiveCarousel: {
        0: {
          items: 1,
          nav: false,
        },
        450: {
          items: 2,
          nav: false,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    };
  },
  computed: mapState({
    discountBooks: state => state.bookStore.discountBooks
  }),
  created() {
    // get namespace value via plugin option
    // and returns Vuex plugin function
    // store.dispatch(namespace + 'pluginAction')
    this.$store.dispatch('bookStore/getDiscountBooks');
  }
};
</script>
<style lang="scss">
#slider-home {
  margin-top: 10px;
}
@media (min-width: 768px) {
  .owl-nav {
    top: 40%;
    position: absolute;
    width: 100%;
    .owl-prev {
      float: left;
      visibility: hidden;
      position: relative;
      &:after {
        visibility: visible;
        position: absolute;
        padding: 5px;
        top: 0;
        left: 0;
        content: "Prev";
        background: blue !important;
      }
    }
    .owl-next {
      float: right;
      background: blue !important;
      visibility: hidden;
      position: relative;
      &:after {
        visibility: visible;
        position: absolute;
        padding: 5px;
        top: 0;
        right: 0;
        content: "Next";
        background: blue !important;
      }
    }
  }
}
</style>
