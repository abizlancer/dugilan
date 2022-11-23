<template>
  <section class="forgot-password container">
    <h2>Forgot password</h2>
    <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
    <account-form label="Username or Email" placeholder="sabrihakuli@outlook.com" />
    <btn text="Reset password" link="#!" />
  </section>
</template>

<script>
import AccountForm from "../components/AccountForm.vue"
import btn from "../components/btn.vue"

export default {
  components: {
    btn,
    AccountForm
  }
}
</script>