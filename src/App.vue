<template>
  <div id="app">
    <div id="nav">
      <h1>Ljudio</h1>
    </div>
    <router-view />
  </div>
</template>

<style>
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
