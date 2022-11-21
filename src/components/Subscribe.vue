<template>
  <article class="subscribe">
    <h5>Subscribe Newsletter</h5>
    <p>Get all the latest information on Events, Sales and Offers.</p>
    <form>
      <span class="icon-email"></span>
      <input type="email" placeholder="Email address">
    </form>
    <btn text="subscribe" link="#!" />
  </article>
</template>

<script>
import btn from "./btn.vue";
export default {
  name: "Subscribe",
  components: {
    btn,
  }
}
</script>
