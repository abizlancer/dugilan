<template>
  <!-- <div class="wrapper container"> -->
    <app-header />
    <clients />
    <app-main />
    <build />
  <!-- </div> -->
</template>

<script>
import AppHeader from "../components/Header.vue"
import Clients from "../components/Clients.vue"
import AppMain from "../components/AppMain.vue"
import Build from "../components/Build.vue"

export default {
  name: "Home",
  components: {
    AppHeader,
    Clients,
    AppMain,
    Build,
  }
}
</script>