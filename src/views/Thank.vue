<template>
  <section class="thanks container">
    <h2>Thank you. Your plugin has been received.</h2>
    <div class="thanks__detail">
      <div class="thanks__detail--item" v-for="(item, key) in thankDetails" :key="key" >
        <span>{{ item.item }}</span>
        <p>{{ item.text }}</p>
      </div>
    </div>
    <h2>Order details</h2>
    <shopping-details :items="cardItems"/>
    <btn text="See your themes" link="#!" />
  </section>
</template>

<script>
import ShoppingDetails from '../components/ShoppingDetails.vue';
import btn from "../components/btn.vue";
export default {
  components: {
    ShoppingDetails,
    btn
  },
  data() {
    return {
      thankDetails: [
        {
          item: "Order number",
          text: "6300",
        },
        {
          item: "Date",
          text: "February 27, 2020",
        },
        {
          item: "Total",
          text: "€ 69,99",
        },
        {
          item: "Payment method",
          text: "Soforte Payment",
        },
      ],
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
        {
          text: "Subtotal",
          suptotal: "€ 89,99",
        },
        {
          text: "Discount Cupon",
          suptotal: "€ 89,99",
        },
        {
          text: "Total",
          suptotal: "€ 89,99",
        },
      ]
    }
  },
}
</script>