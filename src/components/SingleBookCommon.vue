<template>
  <b-container>
    <div>
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-link href="#" class="card-link">
          <b-card-title>Book Title</b-card-title>
        </b-link>
        <b-card-text> Author Name</b-card-text>
        <div class="group-price">
          <del>$10$</del>
          <ins>$5</ins>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "SingleBookCommon",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
img.card-img-top {
  height: 250px !important;
}
</style>
