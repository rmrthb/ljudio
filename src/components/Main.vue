<template>
  <div id="main">
    <div class="wrapper">
      <header>
        <form @submit.prevent>
          <input v-model="searchquery" type="text" placeholder="Search" />
          <router-link
            v-on:click.native="search()"
            to="/searchresult"
            type="submit"
            value="Search"
          >
            Search
          </router-link>
        </form>
        <div class="dropdown">
          <p>{{ user.first_name }}</p>
          <div class="dropdown-content">
            <router-link to="/">Logout</router-link>
          </div>
        </div>
      </header>
      <aside>
        <div class="logo-container">
          <img class="logo" src="../assets/logo.png" />
        </div>
        <ul>
          <li v-for="playlist in playlists" :key="playlist.playlist_id">
            <span>
              <router-link to="/playlist">{{
                playlist.playlist_name
              }}</router-link>
            </span>
          </li>
        </ul>
      </aside>
      <div class="content">
        <router-view class="view"></router-view>
      </div>
    </div>
    <footer>
      <h1>PLAY ME</h1>
      <div id="yt-player"></div>
      <button @click="start()">START</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      searchquery: "",
    };
  },
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    playlists() {
      return this.$store.state.playlists;
    },
  },
  created() {
    this.$store.dispatch("loadPlaylists");
    this.initYoutubePlayer();
  },
  mounted() {
    this.initYoutubePlayer();
  },
  methods: {
    search() {
      let searchq = this.searchquery;
      console.log("Det fungerade");
      this.$store.dispatch("search", searchq);
    },
    initYoutubePlayer(){
        console.log("YT");
        window.player = new window.YT.Player("yt-player", {
          height: "400",
          width: "400",
          playerVars: {
            controls: 0, 
            showInfo: 0,
          },
          events: {
            onStateChange: this.onPlayerStateChange,
            onReady: this.test
          }
        });
    },
    onPlayerStateChange(event){
      switch(event.data){
        case -1:
          console.log("unstarted");
          break;
        case 0:
          console.log("ended");
          break;
        case 1:
          console.log("playing");
          break;
        case 2:
          console.log("paused");
          break;
        case 3:
          console.log("buffering");
          break;
        case 5:
          console.log("video cued");
          break;
      }
    },
    start(){
      let videoId = 'dQw4w9WgXcQ';
      window.player.loadVideoById(videoId);
      window.player.playVideo();
    },
    test(){
      console.log("TEST", window.player);
    }
  },
};
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

footer {
  border-top: 0.2vw solid white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  background: linear-gradient(to right, rgb(21, 68, 150), rgb(46, 114, 230));
}
#app {
  height: 100%;
}

#main {
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
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, rgb(46, 114, 230), rgb(21, 68, 150));
  border-bottom: 0.2vw solid white;
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
  background: linear-gradient(rgb(46, 114, 230), rgb(21, 68, 150));
  grid-row-start: 2;
  grid-row-end: 9;
  height: 100%;
  width: 75%;
  border-right: 0.2vw solid white;
  color: white;
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

.dropdown {
  position: relative;
  color: white;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: linear-gradient(rgb(46, 114, 230), rgb(21, 68, 150));
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  right: 0;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.content {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 9;
  background-color: rgb(21, 68, 150);
  overflow: auto;
}
</style>
