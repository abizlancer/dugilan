<template >
  <navbar />
  <router-view />
  <app-footer />
  <Banner />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import AppFooter from "./components/Footer.vue"
import Banner from "./components/Banner.vue"


export default {
  name: "App",
  components: {
    Navbar,
    AppFooter,
    Banner,
  }
}
</script>