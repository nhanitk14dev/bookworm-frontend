<template>
  <div v-if="book">
    <b-card
      :img-src="imgURL"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <router-link :to="`/books/${book.slug}`">
        <b-card-title>{{book.book_title}}</b-card-title>
      </router-link>
      <b-card-text> {{book.author_name}}</b-card-text>
      <div class="group-price" v-if="book.sub_price > 0">
        <del>${{book.book_price}}</del>
        <ins>${{book.sub_price}}</ins>
      </div>
      <div class="group-price" v-else>
        <ins>${{book.book_price}}</ins>
      </div>
    </b-card>
  </div>
</template>

<script>
const BASE_URL = process.env.VUE_APP_BASE_URL;
export default {
  name: "SingleBookCommon",
  props: ['singleBook'],
  data() {
    return {
      book: this.singleBook,
      imgURL: this.singleBook ? BASE_URL + this.singleBook.book_cover_photo : null
    };
  }
};
</script>

<style lang="scss" scoped>
img.card-img-top {
  height: 250px !important;
}
</style>
