<template>
  <a :href="link" class="btn">{{ text }}</a>
  <!-- <router-link :to="{ name: link }" class="btn">{{ text }}</router-link> -->
</template>

<script>
export default {
  name: "btn",
  props: ["link", "text"]
}
</script>