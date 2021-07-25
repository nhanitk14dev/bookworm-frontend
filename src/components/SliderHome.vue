<template>
  <div id="slider-home">
    <carousel
      :autoplay="true"
      :items="4"
      :margin="10"
      :responsive="responsiveCarousel"
      :center="false"
      loop
    >
      <SingleBookCommon v-for="(item, i) in books" :key="i" />
    </carousel>
  </div>
</template>

<script>
import SingleBookCommon from "@/components/SingleBookCommon.vue";
import carousel from "vue-owl-carousel";
export default {
  name: "SliderHome",
  components: {
    SingleBookCommon,
    carousel,
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
      books: [
        { title: "Foo", price: 8.4 },
        { title: "Barx", price: 8.5 },
        { title: "Bar", price: 8.5 },
        { title: "Bar", price: 8.5 },
        { title: "Bar", price: 8.5 },
        { title: "Bar", price: 8.5 },
      ],
    };
  },
  methods: {},
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
