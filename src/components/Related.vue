<template>
  <div class="related container">
    <h2>Related category plugins</h2>
    <div class="related__content">
      <card :storage="related" />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia"
import useMainStore from "../stores/main"
import Card from "./Card.vue"


export default {
  components: {
    Card
  },
  computed: {
    ...mapState(useMainStore, ["related"])
  },
}
</script>