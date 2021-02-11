<template>
  <div id="app">
    <Login />
    <Register/>
    <!-- <h1>Ljudio</h1> -->

    <router-view />
    <div>
      <Search/>
      <SearchResult/>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult"

export default {
  name: "App",
  components: {
    Login,
    Register,
    Search,
    SearchResult
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0;
}
@font-face {
  font-family: "Visitor";
  src: local("Visitor"), url(./fonts/visitor-TT1-BRK.ttf);
}
#app {
  font-family: "Nunito", sans-serif;
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
