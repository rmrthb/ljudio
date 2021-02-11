<template>
  <div id="header">
    <div class="wrapper">
      <header>
        <form action="">
          <input type="text" placeholder="Search" />
          <input type="submit" value="Submit" />
        </form>
        <p>Username</p>
      </header>
      <aside>
        <div class="logo-container">
          <img class="logo" src="../assets/logo.png">
        </div>
        <ul>
          <li>FAVORITE SONGS</li>
          <li>FAVORITE ARTISTS</li>
          <li>FAVORITE ALBUMS</li>
        </ul>
        <ul>
          <!-- <label>YOUR PLACELIST</label> -->
          <li>RANDOM PLAYLIST 1</li>
          <li>RANDOM PLAYLIST 2</li>
          <li>RANDOM PLAYLIST 3</li>
          <li>RANDOM PLAYLIST 4</li>
          <li>RANDOM PLAYLIST 5</li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* * {
  box-sizing: border-box;
} */
html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}

template {
  height: 100%;
}

#header {
  height: 100%;
}

.wrapper {
  display: grid;
  grid-template-rows: repeat(8, 12.5%);
  grid-template-columns: repeat(4, 20%);
  height: 100%;
}

header {
  grid-column-start: 2;
  grid-column-end: 6;
  display: flex;
  justify-content: space-between;
  background: black;
}
header > form {
  /* vertical-align: middle; */
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 30px;
}
header > p {
  font-weight: bold;
  color: white;
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 30px;
}
aside {
  background-color: black;
  grid-row-start: 1;
    grid-row-end: 9;
    height: 100%;
}

.logo-container {
  width: 12vh;
}

.logo {
  width: 12vh;
  padding: 30px;
  /* object-fit:cover; */
}

aside > ul {
  display: inline;
  list-style: none;
  margin: none;
}

aside > ul > li {
  float: left;
  clear: left;
  padding: 20px;
}
</style>
