<template >
  <section class="account container">
    <categories title="My Profile" :widgetCat="profileCat"/>
    <!-- <dashboard /> -->
    <!-- <Address /> -->
    <!-- <account-details /> -->
  </section>
</template>

<script>
import { mapState } from "pinia"
import useCategoriesStore from "../stores/categories"
import Categories from '../components/Categories.vue';
import Dashboard from '../components/Dashboard.vue';
import Address from '../components/Address.vue';
import AccountDetails from '../components/AccountDetails.vue';

export default {
  name: "Account",
  components: {
    Categories,
    Dashboard,
    Address,
    AccountDetails,
  },
  computed: {
    ...mapState(useCategoriesStore, ["profileCat"])
  }
}
</script>