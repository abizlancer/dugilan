<template >
  <section class="account container">
    <categories title="My Profile" :widgetCat="profileCat" @comp-name="updateComp"/>
    <component :is="active" />
  </section>
</template>

<script>
import { mapState } from "pinia"
import useCategoriesStore from "../stores/categories"
import Categories from '../components/Categories.vue';
import Dashboard from '../components/Dashboard.vue';
import Address from '../components/Address.vue';
import Orders from '../components/Orders.vue';
import AccountDetails from '../components/AccountDetails.vue';

export default {
  name: "Account",
  components: {
    Categories,
    Dashboard,
    Address,
    AccountDetails,
    Orders,
  },
  computed: {
    ...mapState(useCategoriesStore, ["profileCat"])
  },
  data() {
    return {
      active: "Dashboard",
      comp: ["Dashboard", "Address", "AccountDetails"]
    }
  },
  methods: {
    updateComp(comp) {
      if(comp == "Account details") {
        comp = "AccountDetails"
      }
      this.active = comp
      console.log(this.active);
    }
  },
}
</script>