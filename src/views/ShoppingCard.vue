<template >
  <section class="shopping-card container">
    <h2>Shopping Card</h2>
    <article class="shopping-card__content">
      <shopping-details />
      <div class="shopping-card__totals">
        <div class="shopping-card__totals--widget">
          <h3>Card totals</h3>
          <div class="shopping-card__totals--widget-item" v-for="(item, key) in shoppingWidget" :key="key">
            <p>{{ item.text }}</p>
            <p>{{ item.price }}</p>
          </div>
        </div>
        <btn text="Proceed to checkout" link="#!" />
      </div>
    </article>
    <div class="shopping-card__form">
      <app-form placeholder="Your discount code" />
      <p>If you have a coupon code discount please apply , otherwise please subscribe to our offers below for a chance to receive one. </p>
    </div>
  </section>
</template>

<script>
import Categories from "../components/Categories.vue"
import btn from "../components/btn.vue"
import AppForm from "../components/form.vue"
import ShoppingDetails from "../components/ShoppingDetails.vue"

export default {
  components: {
    Categories,
    btn,
    AppForm,
    ShoppingDetails
  },
  data() {
    return {
      shoppingWidget: [
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
      ]
    }
  },
}
</script>