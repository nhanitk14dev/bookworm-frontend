<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col v-for="index in 4" :key="index" lg="3" md="6" sm="12">
        <SingleBookCommon />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SingleBookCommon from "@/components/SingleBookCommon.vue";
export default {
  name: "PopularBook",
  components: {
    SingleBookCommon,
  },
};
</script>
