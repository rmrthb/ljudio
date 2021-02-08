<template>
  <div id="container">
    <div id="modal">
      <div id="modal-content">
        <img id="logo-img" src="../assets/logo.png" />
        <div id="userinfo-container">
          <input placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
        </div>
        <button type="submit">Login</button>
        <br />
        <p>Not a registered user?</p>
        <a href="#">Click here!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  background-image: url("https://img.wallpapersafari.com/desktop/1680/1050/63/21/wU4tOM.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  padding: 0vw;
  margin: 0;
}

/* The Modal (background) */
#modal {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 30%;
  height: 100%;
  overflow: auto;
}

/* Modal Content/Box */
#modal-content {
  background: linear-gradient(rgb(46, 114, 230), rgb(21, 68, 150));
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 2px solid rgb(21, 68, 150);
  width: 100%; /* Could be more or less, depending on screen size */
}

#logo-img {
  height: 30%;
  width: 15%;
}
</style>
