<template>
    <div class="home-page">
        <SliderHome />
    </div>
</template>
<script>
// @ is an alias to /src
import SliderHome from "@/components/SliderHome.vue";

export default {
  name: "Home",
  components: {
    SliderHome,
  },
};
</script>