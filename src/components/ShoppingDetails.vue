<template >
  <div class="shopping__details">
    <div class="shopping__details--title">
      <p>Products</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Suptotal</p>
    </div>
    <div class="shopping__details--content">
      <div class="shopping__details--item" v-for="(item, key) in cardItems" :key="key">
        <div class="shopping__details--item-logo">
          <img src="/img/wire.svg" alt="logo">
          <p>{{ item.logo }}</p>
        </div>
        <p>{{ item.price }}</p>
        <p>{{ item.quantity }}</p>
        <p>{{ item.suptotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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