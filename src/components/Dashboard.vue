<template>
  <article class="dashboard">
    <h2>Dashboard</h2>
    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
    <div class="dashboard__items">
      <a :href="item.link" class="dashboard__items--item" v-for="(item, key) in dashboard" :key="key">
        <img :src="item.img" alt="dashboard">
        <h4>{{ item.text }}</h4>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      dashboard: [
        {
          link: "#!",
          img: "/img/dashboard/shopping-bag.png",
          text: "Orders",
        },
        {
          link: "#!",
          img: "/img/dashboard/map-pin.png",
          text: "Address",
        },
        {
          link: "#!",
          img: "/img/dashboard/user.png",
          text: "Acount details",
        },
      ]
    }
  },
}
</script>