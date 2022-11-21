<template>
  <section class="main">
    <article class="main__right">
      <categories title="Browse Categories" :browseCat="browseCat" />
      <subscribe />
      <chart />
      <ads />
    </article>
    <article class="main__content">
      <call-out />
      <div class="main__content--main">
        <card />
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from "pinia"
import useCategoriesStore from "../stores/categories"
import Card from "./Card.vue"
import Categories from "./Categories.vue"
import Subscribe from "./Subscribe.vue"
import Chart from "./Chart.vue"
import Ads from "./Ads.vue"
import CallOut from "./CallOut.vue"


export default {
  name: "main",
  components: {
    Subscribe,
    Chart,
    Ads,
    CallOut,
    Card,
    Categories,
  },
  computed: {
    ...mapState(useCategoriesStore, ["browseCat"])
  },
  
}
</script>