<template>
  <div class="home">
    <h2 class="mb-4">前台 products</h2>
    <section class="container">
      <div class="row">
        <div class="col-4" v-for="item in products" :key="item.id">
          <article class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <h6 class="card-text text-danger">$ {{ item.origin_price }}</h6>
              <router-link :to="`/product/${ item.id }`" class="btn btn-primary mt-3 px-4">查看詳細</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
    <Loading :active.sync="isLoading"></Loading>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      fullPage: true,
      products: []
    }
  },
  created () {
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res)
        this.products = res.data.data
        this.isLoading = false
      })
  }
}
</script>
