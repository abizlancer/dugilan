<template>
  <article class="card" v-for="(item, key) in mainItems" :key="key">
    <div class="card__img">
      <img :src="item.img" alt="card">
      <div class="card__links">
        <div class="card__links--likes icon-heart">
          <h6>130</h6>
        </div>
        <div class="card__links--add">
          <button type="button">
            <img src="img/categories/icons/eye.svg" alt="eye">
          </button>
          <button type="button">
            <img src="img/categories/icons/shopping-cart.svg" alt="cart">
          </button>
        </div>
      </div>
    </div>
    <div class="card__info">
      <a :href="item.link"><h5>{{ item.title }}</h5></a>
      <h6>{{ item.stack }}</h6>
      <p>{{ item.price }}</p>
    </div>
  </article>
</template>

<script>
import { mapState } from "pinia"
import useMainStore from "../stores/main"

export default {
  name: "card",
  computed: {
    ...mapState(useMainStore, ["mainItems"])
  }
}
</script>