<template>
  <div class="home">
    <h2>單一產品頁面</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  dtat () {
    return {
      product: []
    }
  },
  created () {
    // $route - 屬性，可以找到 id
    const id = this.$route.params
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        console.log(res)
        this.product = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
