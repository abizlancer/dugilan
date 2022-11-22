<template>
  <article class="address">
    <h2>Address</h2>
    <h4>Billing address</h4>
    <button type="button">Edit</button>
    <div class="address__info">
      <div class="address__info--item" v-for="(item, key) in profileInfo" :key="key" >
        <span>{{ item.text }}</span>
        <p>{{ item.info }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      profileInfo: [
        {
          text: "First Name",
          info: "Sabri"
        },
        {
          text: "Last Name",
          info: "Hakuli"
        },
        {
          text: "Country",
          info: "Kosovo"
        },
        {
          text: "Street Address",
          info: "Chuck Norris 32"
        },
        {
          text: "Town",
          info: "Gjilan"
        },
        {
          text: "State",
          info: "Gjilan"
        },
        {
          text: "Postal Code",
          info: "60000"
        },
        {
          text: "Phone",
          info: "+383 44 201 874"
        },
        {
          text: "Email Address",
          info: "sabrihakuli@outlook.com"
        },
      ]
    }
  },
}
</script>