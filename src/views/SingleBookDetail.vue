<template>
    <div class="book-details-page">
        <b-row v-if="book">
            <b-col md="7" sm="12">
                <h3>Filter By</h3>
                <div class="book-info">
                    <div class="book-f-image">
                        <img alt="placeholder" class="img-thumbnail" :src="imgURL">
                        <div class="mt-2 text-center">
                          {{book.author_name}}
                        </div>
                    </div>
                    <div class="content">
                        <h3 class="title-b">
                          {{book.book_title}}
                        </h3>
                        <div>{{book.book_summary}}</div>
                    </div>
                </div>
            </b-col>
            <b-col md="5" sm="12">
              <div class="group-price" v-if="book.sub_price > 0">
                <del>${{book.book_price}}</del>
                <ins>${{book.sub_price}}</ins>
              </div>
              <div class="group-price" v-else>
                <ins>${{book.book_price}}</ins>
              </div>
            </b-col>
        </b-row>
        <b-row v-else>
          <h4>Not found</h4>
        </b-row>
    </div>
</template>
<script>
const API_PATH = process.env.VUE_APP_API_BASE_URL;
const BASE_URL = process.env.VUE_APP_BASE_URL;
const axios = require('axios');
export default {

  name: 'SingleBookDetail',
  props: ["slug"],
  data() {
    return {
      book: null,
      imgURL: null
    }
  },
  mounted () {
    let slug = this.$route.params.slug;
    axios
      .get(API_PATH+'/books/'+slug)
      .then(response => {
        this.book = response.data.book;
        this.imgURL = BASE_URL + this.book.book_cover_photo;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

    console.log(this.book)
  }
}
</script>
<style lang="scss" scoped>
</style>