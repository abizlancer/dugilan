<template>
  <section class="main container">
    <article class="main__right">
      <categories title="Browse Categories" :widgetCat="browseCat" />
      <subscribe />
      <chart />
      <ads />
    </article>
    <article class="main__content">
      <call-out />
      <div class="main__content--main">
        <card :storage="mainItems" />
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from "pinia"
import useCategoriesStore from "../stores/categories"
import useMainStore from "../stores/main"
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
    ...mapState(useCategoriesStore, ["browseCat"]),
    ...mapState(useMainStore, ["mainItems"])
  },
  
}
</script>