<template>
  <section class="clients container">
   <h5>Some of our 500 clients already using Dugilan</h5>
   <div class="clients__items">
      <img v-for="(client, key) in clients" :key="key" :src="client.img" alt="client">
   </div>
  </section>
</template>
<script>
export default {
  name: "Clients",
  data() {
    return {
      clients: [
        {img: "/img/customers/acer.svg"},
        {img: "/img/customers/facebook.svg"},
        {img: "/img/customers/linkedin.svg"},
        {img: "/img/customers/forbes.svg"},
        {img: "/img/customers/dell.svg"},
      ]
    }
  },
}
</script>