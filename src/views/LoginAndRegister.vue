<template>
  <section class="log-reg container">
    <div class="log">
      <account-form title="Login" :arr="log" />
      <div class="log-reg-submit">
        <btn text="Login to your account" link="account" />
        <label for="#!">
          <input type="checkbox">
          <span>Remember me</span>
        </label>
      </div>
      <router-link :to="{ name: 'resetPassword' }" class="log-lost">Lost your password?</router-link>
    </div>
    <div class="reg">
      <account-form title="Register" :arr="null" input="text" placeholder="sabrihakuli@outlook.com" />
      <p>A password will be sent to your email address.</p>
      <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
      <btn text="Register" link="account" />
    </div>
  </section>
</template>

<script>
import btn from "../components/btn.vue"
import AccountForm from '../components/AccountForm.vue';

export default {
  components: {
    AccountForm,
    btn
  },
  data() {
    return {
      log: [
        {
          label: "Username or email address",
          input: "text",
          placeholder: "sabrihakuli@outlook.com"
        },
        {
          label: "Password",
          input: "password",
          placeholder: "********************"
        },
      ]
    }
  },
}
</script>