<template>
  <div id="app">
    <Login />
    <!-- <h1>Ljudio</h1> -->

    <router-view />
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
* {
  margin: 0;
}
@font-face {
  font-family: "Visitor";
  src: local("Visitor"), url(./fonts/visitor-TT1-BRK.ttf);
}
#app {
  font-family: "Visitor";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
