<template>
  <div id="auth">
    <Login v-if="!registerView" v-on:registerClick="toggleRegister" />
    <Register v-if="registerView" v-on:loginClick="toggleRegister" />
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";

export default {
  name: "Auth",
  components: {
    Login,
    Register
  },
  data() {
    return { registerView: false };
  },
  methods: {
    toggleRegister() {
      this.registerView = !this.registerView;
    },
  },
};
</script>

<style></style>
