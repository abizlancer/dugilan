<template>
  <article class="orders">
    <h2>Orders</h2>
    <div class="orders__list">
      <div class="shopping__details">
        <div class="shopping__details--title">
          <p>Order name</p>
          <p>Order ID</p>
          <p>Status</p>
          <p>QTY</p>
          <p>Total</p>
        </div>
        <div class="shopping__details--content">
          <div class="shopping__details--item" v-for="(item, key) in cardItems" :key="key">
            <div class="shopping__details--item-logo">
              <img src="/img/wire.svg" alt="logo">
              <p>{{ item.logo }}</p>
            </div>
            <p>{{ item.price }}</p>
            <p>Processing</p>
            <p>{{ item.quantity }}</p>
            <p>{{ item.suptotal }}</p>
            <div class="shopping__details--item-links">
              <router-link :to="{ name: 'billing' }">details</router-link>
              <btn text="Download" link="#!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import btn from "../components/btn.vue"

export default {
  components: {
    btn
  },
  data() {
    return {
      cardItems: [
        {
          logo: "WireDugi",
          price: "#2306",
          quantity: "1",
          suptotal: "€ 89,99",
        },
        {
          logo: "WireDugi",
          price: "#2306",
          quantity: "1",
          suptotal: "€ 89,99",
        },
        {
          logo: "WireDugi",
          price: "#2306",
          quantity: "1",
          suptotal: "€ 89,99",
        },
      ]
    }
  },
}
</script>