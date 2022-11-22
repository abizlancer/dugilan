<template>
  <article class="account-details">
    <div class="details">
      <accoutn-form title="Account Details" :arr="formInfo" />
    </div>
    <div class="change-password">
      <accoutn-form title="Change Password" :arr="resetPass" />
    </div>
    <div class="account-details--confirm">
      <btn text="Save changes" link="#!" />
      <button type="reset">Reset</button>
    </div>
  </article>
</template>

<script>
import AccoutnForm from "../components/AccountForm.vue"
import btn from "../components/btn.vue";

export default {
  components: {
    AccoutnForm,
    btn
  },
  data() {
    return {
      formInfo: [
        {
          label: "First Name",
          input: "text",
        },
        {
          label: "Last Name",
          input: "text",
        },
        {
          label: "Display name",
          input: "text",
        },
        {
          label: "Email Address",
          input: "email",
        }
      ],
      resetPass: [
        {label: "Current password"},
        {label: "New Password"},
        {label: "Confirm new passowrd"},
      ]
    }
  },
}
</script>