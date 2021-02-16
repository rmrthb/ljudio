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
@import '../assets/style.css';
</style>
