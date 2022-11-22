<template >
  <webshop-main />
  <build/>
  <related />
</template>
<script>
import WebshopMain from "../components/webshop-main.vue";
import Build from "../components/Build.vue"
import Related from "../components/Related.vue"

export default {
  components: {
    WebshopMain,
    Build,
    Related,
  }
}
</script>