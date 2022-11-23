<template >
  <div class="shopping__details">
    <div class="shopping__details--title">
      <p>Products</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Suptotal</p>
    </div>
    <div class="shopping__details--content">
      <div class="shopping__details--item" v-for="(item, key) in items" :key="key">
        <div class="shopping__details--item-logo" v-if="item.logo">
          <img src="/img/wire.svg" alt="logo">
          <p>{{ item.logo }}</p>
        </div>
        <p v-if="item.text">{{ item.text }}</p>
        <p v-if="item.price">{{ item.price }}</p>
        <p v-if="item.quantity">{{ item.quantity }}</p>
        <p>{{ item.suptotal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  // data() {
  //   return {
  //     cardItems: [
  //       {
  //         logo: "WireDugi",
  //         price: "#2306",
  //         quantity: "1",
  //         suptotal: "€ 89,99",
  //       },
  //       {
  //         logo: "WireDugi",
  //         price: "#2306",
  //         quantity: "1",
  //         suptotal: "€ 89,99",
  //       },
  //       {
  //         logo: "WireDugi",
  //         price: "#2306",
  //         quantity: "1",
  //         suptotal: "€ 89,99",
  //       },
  //     ]
  //   }
  // },
}
</script>