<template>
  <div>
    <form @submit.prevent="registerUser">
      <input v-model="user.email" type="text" placeholder="email" />
      <br />
      <input v-model="user.password" type="password" placeholder="password" />
      <br />
      <input v-model="user.first_name" type="text" placeholder="first name" />
      <br />
      <input v-model="user.last_name" type="text" placeholder="last name" />
      <br />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      user: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
      },
    };
  },
  methods: {
    registerUser() {
      let user = {
        email: this.user.email,
        password: this.user.password,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
      };
      this.$store.dispatch("registerUser", user);
    },
  },
};
</script>

<style>
</style>