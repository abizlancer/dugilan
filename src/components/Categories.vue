<template>
  <article class="categories">
    <h3 class="categories--title">{{ title }}</h3>
    <a :href="category.link" class="categories__item" v-for="(category, key) in browseCat" :key="key">
      <img v-if="category.img != null" :src="category.img" alt="">
      {{ category.text }}
    </a>
  </article>
</template>

<script>
export default {
  props: ["title", "browseCat"]
}
</script>