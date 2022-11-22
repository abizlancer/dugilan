<template>
  <section class="webshop container">
    <article class="webshop__main">
      <div class="webshop--logo">
        <img src="/img/wire.svg" alt="logo">
        <p>WireDugi</p>
      </div>
      <p>Upload a CSV File of people's names to guess their genders </p>
      <div class="webshop__video">
        <img src="/img/video.png" alt="video">
        <a href="#!" class="webshop__video--play icon-play"></a>
      </div>
      <div class="webshop__main--info">
        <p>Gender detection is a wordpress plugin designed and builded for detection of genders in large data files. The plugin allows you to go beyond the usual text messages and contact forms and get closer to your users. The plugin adds a voice recording button to any convenient place on the site. This can be useful for reviews, order comments or any questions.</p>
        <p>Our WooCommerce cart PDF plugin helps you and your customers to export their current cart items as PDF. Customize the PDF with ease:</p>
      </div>
      <slider />
    </article>
    <article class="webshop__widgets">
      <p>If you have a coupon code discount please apply, otherwise please subscribe to our offers below for a chance to receive one.</p>
      <Form />
      <div class="widgets__price">
        <div class="widgets__price--title">
          <p>Licence Price</p>
          <h3>€ 89,99 </h3>
        </div>
        <div class="widgets__price--items" v-for="(item, key) in priceItems" :key="key">
          <img v-if="item.check" src="/img/categories/icons/check.svg" alt="check">
          <input v-else type="checkbox">
          <p>{{ item.text }}</p>
        </div>
        <div class="widgets__price--items widget--extend">
          <div class="widget--extend--title">
            <input type="checkbox">
            <p>Extend support to 12 months</p>
            <p>+ 55.50 €</p>
          </div>
          <div class="widget--extend--item" v-for="(item, key) in extendItems" :key="key" >
            <p>{{ item.text }}</p>
            <span>{{ item.price }}</span>
          </div>
        </div>
        <div class="widgets__price--items">
          <btn link="#!" text="add to cart" />
        </div>
      </div>
      <p>After your plugin purchase, you'll get the licence key and plugin option to download. Be aware that this plugin can only be activated one time in any of your WordPress Sites.</p>
      <div class="tech__widget">
        <div class="tech__widget--item" v-for="(item, key) in techItems">
          <span>{{ item.text }}</span>
          <p>{{ item.tech }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import Slider from "./Slider.vue"
import Form from "./form.vue";
import btn from "./btn.vue"

export default {
  name: "WebShopMain",
  components: {
    Slider,
    Form,
    btn,
  },
  data() {
    return {
      priceItems: [
        {
          check: true,
          text: "Quality checked by Ceyond"
        },
        {
          check: true,
          text: "Included: Future updates"
        },
        {
          check: true,
          text: "Included: 1 months support from our team"
        },
      ],
      extendItems: [
        {
          text: "Discount code %",
          price: "- 3%"
        },
        {
          text: "Subtotal Price",
          price: "+ 85.99 €"
        },
        {
          text: "Price after Tax",
          price: "+ 99.99 €"
        },
        {
          text: "Price after duscount",
          price: "+ 89.99 €"
        },
        {
          text: "Total Price",
          price: "89.99 €"
        },
      ],
      techItems: [
        {
          text: "Last Update",
          tech: "25 February 2020",
        },
        {
          text: "Creted",
          tech: "25 February 2020 ",
        },
        {
          text: "Compatible Browsers",
          tech: "IE11, Firefox, Chrome, Opera, Edge, Safari",
        },
        {
          text: "Stack",
          tech: "PHP, VUE JS",
        },
        {
          text: "Category",
          tech: "Data ",
        },
        {
          text: "Current Version",
          tech: "2.0.0",
        },
      ]
    }
  },
}
</script>