<template >
  <section class="billing container">
    <div class="billing__adress">
      <Address />
    </div>
    <div class="billing__order">
      <h2>Your order</h2>
      <div class="billing__order--items">
        <div class="billing__order--item">
          <div class="billing__order--item-logo">
            <img src="/img/wire.svg" alt="">
            <span>WireDugi</span>
          </div>
          <span class="icon-close"></span>
        </div>
        <div class="billing__order--item">
          <div class="billing__order--item-logo">
            <img src="/img/wire.svg" alt="">
            <span>WireDugi</span>
          </div>
          <span class="icon-close"></span>
        </div>
        <div class="billing__order--item">
          <div class="billing__order--item-logo">
            <img src="/img/wire.svg" alt="">
            <span>WireDugi</span>
          </div>
          <span class="icon-close"></span>
        </div>
      </div>
      <div class="billing__order--items order--prices">
        <div class="billing__order--item" v-for="(item, key) in prices" :key="key">
          <p>{{ item.text }}</p>
          <p>{{ item.price }}</p>
        </div>
      </div>
      <div class="billing__payments">
        <div class="billing__payments--cards">
          <div class="billing__payments--cards-agree">
            <div class="billing__payments--cards-check">
              <img src="/img/billings/check-square.svg" alt="check">
              <p>Soforte Payment</p>
            </div>
            <div class="billing__payments--cards-items">
              <div class="billing__payments--cards-card" v-for="(item, key) in cards" :key="key">
                <img :src="item.img" alt="">
              </div>
            </div>
          </div>
          <btn text="Go to soforte" link="#!" />
        </div>
        <label class="billing__payments--cards paypal-check">
          <input type="checkbox">
          <img src="/img/billings/PayPal.svg" alt="paypal">
        </label>
        <div class="billing__payments--agree">
          <label class="billing__paymants--agree-check">
            <input type="checkbox">
            <p>I have read and agree to the website terms and conditions</p>
          </label>
          <btn text="Place order" link="thank" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Address from "../components/Address.vue"
import btn from "../components/btn.vue"

export default {
  components: {
    Address,
    btn
  },
  data() {
    return {
      prices: [
        {
          text: "Subtotal",
          price: "€ 89,99",
        },
        {
          text: "Discount Cupon",
          price: "€ 89,99",
        },
        {
          text: "Total",
          price: "€ 89,99",
        },
      ],
      cards: [
        {img: "/img/billings/mastercard.svg"},
        {img: "/img/billings/amex.svg"},
        {img: "/img/billings/visa.svg"},
        {img: "/img/billings/diners.svg"},
        {img: "/img/billings/jcb.svg"},
        {img: "/img/billings/discover.svg"},
      ]
    }
  },
}
</script>