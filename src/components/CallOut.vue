<template >
  <div class="callout">
    <article class="callout__item" v-for="(item, key) in calloutItems" :key="key">
      <div class="callout__item--img">
        <img :src="item.img" alt="">
      </div>
      <div class="callout__item--info">
        <h5>{{ item.title }}</h5>
        <p>{{ item.text }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from "pinia";
import useCalloutStore from "../stores/callout";

export default {
  name: "callout",
  computed: {
    ...mapState(useCalloutStore, ["calloutItems"])
  }
}
</script>