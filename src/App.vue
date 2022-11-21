<template >
  <div class="wrapper container">
    <navbar />
    <app-header />
    <clients />
    <app-main />
    <build />
    <app-footer />
  </div>
  <Banner />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import AppHeader from "./components/Header.vue"
import Clients from "./components/Clients.vue"
import AppMain from "./components/AppMain.vue"
import Build from "./components/Build.vue"
import AppFooter from "./components/Footer.vue"
import Banner from "./components/Banner.vue"


export default {
  name: "App",
  components: {
    Navbar,
    AppHeader,
    Clients,
    AppMain,
    Build,
    AppFooter,
    Banner,
  }
}
</script>