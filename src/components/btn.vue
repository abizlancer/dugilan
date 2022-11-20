<template>
  <a href="#!" class="btn">{{ text }}</a>
</template>

<script>
export default {
  name: "btn",
  props: ["link", "text"]
}
</script>