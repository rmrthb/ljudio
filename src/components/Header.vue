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
        <!-- <img src="../assets/logo.png"> -->
        <ul>
            <li>FAVORITE SONGS</li>
            <li>FAVORITE ARTISTS</li>
            <li>FAVORITE ALBUMS</li>
        </ul>
        <ul>
            <label>YOUR PLACELIST</label>
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


.wrapper{
    display:grid;
    grid-template-rows: 10%,90%;
    grid-template-columns: 10%,90%;
}

header {
  grid-column: 2;  
  display: flex;
  justify-content: space-between;
  background: black;
}
header > form {
  vertical-align: middle;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
header > p {
  font-weight: bold;
  color: white;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
aside{
    grid-row-start: 1;
    grid-row-end: 3;
}

aside>ul{
    list-style: none;
    margin:none;
}
</style>