<template>
  <nav class="nav container">
    <router-link to="/">
      <img src="/img/logo.svg" alt="logo">
    </router-link>
    <div class="nav__content">
      <ul class="nav__list">
        <li><a href="#!" class="icon-chevron-down" >Browse</a></li>
        <li><a href="#!">All-Exclusive</a></li>
        <li><a href="#!">Docs</a></li>
      </ul>
      <div class="nav__links">
        <a href="#!" class="nav__links--link">
          <img src="/img/heart.svg" alt="icon">
          <span>1</span>
        </a>
        <router-link :to="{ name: 'shoppingCard' }" class="nav__links--link">
          <img src="/img/shopping-bag.svg" alt="icon">
          <span>5</span>
        </router-link>
        <btn text="Account" link="logReg" />
      </div>
      <div class="nav--burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
import btn from "./btn.vue";

export default {
  name: "Navbar",
  components: {
    btn
  }
}
</script>