<template >
	<section class="build container">
    <img src="/img/build.png" alt="build">
    <div class="build__content">
      <h2>We build apps and websites</h2>
      <p>From multipurpose themes to niche templates, you'll always find something that catches your eye.</p>
      <article class="build__content--links">
        <btn text="contact us" link="#!" />
        <a href="#!">or see our portfolio</a>
      </article>
    </div>
  </section>
</template>

<script>
import btn from "./btn.vue";

export default {
  name: "build",
  components: {
    btn
  }
}
</script>