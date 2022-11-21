<template>
  <article class="categories">
    <h3 class="categories--title">{{ title }}</h3>
    <div class="categories__item" v-for="(category, key) in browseCat" :key="key">
      <img v-if="category.img != null" :src="category.img" alt="">
      <a :href="category.link">{{ category.text }}</a>
    </div>
  </article>
</template>

<script>
export default {
  props: ["title", "browseCat"]
}
</script>