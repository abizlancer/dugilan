<template>
  <header class="header">
    <div class="header__info">
      <h1>More than 100 Wordpress Themes & Templates</h1>
      <form action="#!">
        <input type="text" placeholder="e.g Responsive slider">
        <btn link="#!" text="Search" />
      </form>
      <p>From multipurpose themes to niche templates, you'll always find something that catches your eye.</p>
    </div>
    <div class="header__photos">
      <div class="header__photos--content">
        <img v-for="(item, key) in headerPhotos" :key="key" :src="item.img" alt="item">
        <div class="header__photos--item" >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import btn from "./btn.vue";

export default {
  name: "Header",
  components: {
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