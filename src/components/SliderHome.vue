<template>
  <div id="slider-home">
    <carousel
      :autoplay="true"
      :nav="false"
      :items="4"
      :margin="10"
      :responsive="responsiveCarousel"
      :center="false"
      loop
    >
      <SingleBookCommon v-for="(item, i) in books"/>
    </carousel>
  </div>
</template>

<script>
import SingleBookCommon from "@/components/SingleBookCommon.vue";
import carousel from 'vue-owl-carousel'
export default {
  name: 'SliderHome',
  components: {
    SingleBookCommon,
    carousel,
    responsiveCarousel: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  },
  data () {
    return {
    	slide: 0,
      sliding: null,
      books: [
        { title: 'Foo', price: 8.4 },
        { title: 'Barx', price: 8.5 },
        { title: 'Bar', price: 8.5 },
        { title: 'Bar', price: 8.5 },
        { title: 'Bar', price: 8.5 },
        { title: 'Bar', price: 8.5 }
      ]
    }
  },
  methods: {
	  
	}
}
</script>

<style lang="css" scoped>
#slider-home {
  margin-top: 10px;
}
</style>