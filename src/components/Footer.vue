<template >
  <footer class="footer container">
    <article class="footer__item">
      <p>Envato Market</p>
      <ul class="footer__list">
        <li><a href="#!">Terms</a></li>
        <li><a href="#!">Licenses</a></li>
        <li><a href="#!">Market API</a></li>
        <li><a href="#!">Become an affiliate</a></li>
      </ul>
    </article>
    <article class="footer__item">
      <p>Help</p>
      <ul class="footer__list">
        <li><a href="#!">Themes and Templates</a></li>
        <li><a href="#!">Authors</a></li>
        <li><a href="#!">Help Center</a></li>
      </ul>
    </article>
    <article class="footer__item">
      <p>Our Community</p>
      <ul class="footer__list">
        <li><a href="#!">Community</a></li>
        <li><a href="#!">Blog</a></li>
        <li><a href="#!">Forums</a></li>
        <li><a href="#!">Meetups</a></li>
      </ul>
    </article>
    <article class="footer__item">
      <p>Contact</p>
      <ul class="footer__list">
        <li><a href="#!">Sabri Hakuli</a></li>
        <li><a href="#!">sabrihakuli@outlook.com</a></li>
        <li><a href="#!">+383 44 201 874</a></li>
      </ul>
    </article>
  </footer>
</template>

<script>
import { mapState } from "pinia";
import useFooterStore from "../stores/footerStore";

export default {
  name: "Footer",
  computed: {
    ...mapState(useFooterStore, ["footerTitles", "footerLinks"])
  }
}
</script>