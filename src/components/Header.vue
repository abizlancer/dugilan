<template>
  <header class="header container">
    <div class="header__info">
      <h1>More than 100 Wordpress Themes & Templates</h1>
      <Form />
      <p>From multipurpose themes to niche templates, you'll always find something that catches your eye.</p>
    </div>
    <div class="header__photos">
      <img v-for="(item, key) in headerPhotos" :key="key" :src="item.img" alt="item">
    </div>
  </header>
</template>

<script>
import btn from "./btn.vue";
import Form from "./form.vue"

export default {
  name: "Header",
  components: {
    Form,
    btn
  },
  data() {
    return {
      headerPhotos: [
        {img: "/img/main/item1.png"},
        {img: "/img/main/item2.png"},
        {img: "/img/main/item3.png"},
      ]
    }
  }
}
</script>