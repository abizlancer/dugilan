<template>
  <article class="categories">
    <h3 class="categories--title">{{ title }}</h3>
    <a :href="category.link" class="categories__item" v-for="(category, key) in widgetCat" :key="key" @click="func(category)">
      <img v-if="category.img != null" :src="category.img" alt="img">
      {{ category.text }}
    </a>
  </article>
</template>

<script>

export default {
  props: ["title", "widgetCat"],
  data() {
    return {
      name,
    }
  },
  methods: {
    func(item) {
      this.name = item.text
      console.log(this.name);
      this.$emit('comp-name', this.name)
    },
    clickedComp() {
    }
  },
}
</script>