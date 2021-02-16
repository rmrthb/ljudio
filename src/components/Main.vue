<template>
  <div id="main">
    <div class="wrapper">
      <header>
        <div class="logo-container">
          <img class="logo" src="../assets/logo.png" />
        </div>
        <form @submit.prevent>
          <input
            v-model="searchquery"
            type="text"
            placeholder="Click here to search"
          />
          <router-link
            v-on:click.native="search()"
            to="/searchresult"
            type="submit"
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
        <ul>
          <li v-for="playlist in playlists" :key="playlist.playlist_id">
            <span>
              <router-link
                to="/playlist"
                v-on:click.native="getPlaylist(playlist.playlist_id)"
                type="submit"
                >{{ playlist.playlist_name }}</router-link
              >
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
      <button @click="stop()">PAUSE</button>
      <button @click="resume()">RESUME</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      searchquery: "",
      userPlaylistId: "",
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
    userPlaylist() {
      return this.$store.state.userPlaylist;
    },
  },
  created() {
    this.$store.dispatch("loadPlaylists");
  },
  mounted() {
    this.initYoutubePlayer();
  },
  methods: {
    getPlaylist(value) {
      console.log("GET PLAYLIST");
      console.log(value);
      this.$store.dispatch("getPlaylist", value);
    },
    search() {
      let searchq = this.searchquery;
      console.log("Det fungerade");
      this.$store.dispatch("search", searchq);
      this.searchquery = "";
    },
    initYoutubePlayer() {
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
          onReady: this.test,
        },
      });
    },
  },
  onPlayerStateChange(event) {
    switch (event.data) {
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
  start() {
    let videoId = "dQw4w9WgXcQ";
    window.player.loadVideoById(videoId);
    window.player.playVideo();
  },
  stop() {
    window.player.pauseVideo();
  },
  resume() {
    window.player.playVideo();
  },
  test() {
    console.log("TEST", window.player);
  },
};
</script>

<style>
* {
  font-family: "Nunito", sans-serif;
}
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
  height: 5vw;
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
  grid-template-rows: repeat(16, 6.25%);
  grid-template-columns: repeat(10, 10%);
  height: 100%;
}

header {
  grid-column-start: 1;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, rgb(46, 114, 230), rgb(21, 68, 150));
  border-bottom: 0.2vw solid white;
}
header > form {
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
  grid-row-start: 3;
  grid-row-end: 16;
  grid-column-start: 1;
  grid-column-end: 3;
  height: 100%;

  border-right: 0.2vw solid white;
  color: white;
}

.logo-container {
  width: 12vh;
}

.logo {
  width: 12vh;
  padding: 30px;
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
  margin-right: 1vw;
  margin-top: 2.5vw;
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
  grid-column-start: 3;
  grid-column-end: 11;
  grid-row-start: 3;
  grid-row-end: 16;
  margin-bottom: 2.2vw;
  margin-left: 2vw;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0.7vw;
}

::-webkit-scrollbar-track {
  border-radius: 0.2vw;
  box-shadow: 0 0 10px rgba(0, 0, 2, 0.5);
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
input[type="text"] {
  background-color: transparent;
  color: white;
  border: none;
  font-family: "Nunito", sans-serif;
}

input[type="text"]::placeholder {
  color: white;
  font-family: "Nunito", sans-serif;
}
#yt-player {
  display: none;
}
</style>
