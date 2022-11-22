<template>
  <article class="card" v-for="(item, key) in storage" :key="key">
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
      <router-link :to="{ name: item.link}"><h5>{{ item.title }}</h5></router-link>
      <h6>{{ item.stack }}</h6>
      <p>{{ item.price }}</p>
    </div>
  </article>
</template>

<script>

export default {
  name: "card",
  props: ["storage"]
}
</script>