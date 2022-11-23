<template >
  <form action="#!" class="search-form">
    <input type="text" :placeholder="placeholder != null ? placeholder : 'e.g Responsive slider'">
    <btn link="#!" text="Search"/>
  </form>
</template>

<script>
import btn from "./btn.vue"

export default {
  name: "Form",
  components: {
    btn
  },
  props: ["placeholder"]
}
</script>