<template>
  <div id="main">
    <div class="wrapper">
      <header>
        <div class="logo-container">
          <img class="logo" src="../assets/logo.png" />
        </div>
        <div class="form-container">
          <form @submit.prevent>
            <input
              id="searchfield"
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
        </div>
        <div class="user-container">
          <button @click="toggle" class="dropdown">
            {{ user.first_name }}
            <div v-if="active" class="dropdown-content">
              <router-link v-on:click.native="logout()" to="/" type="submit"
                >Logout</router-link
              >
            </div>
          </button>
        </div>
      </header>
      <aside>
        <ul>
          <li><a href="#" @click="toggleShowInputField">Create Playlist</a></li>
          <li v-if="showInputField">
            <form class="createPlaylistForm" @submit.prevent>
              <input
                v-model="playlist_name"
                type="text"
                placeholder="Playlist Name"
              />
              <button type="submit" @click="createPlaylist()">Add</button>
            </form>
          </li>
          <div v-for="playlist in playlists" :key="playlist.playlist_id">
          <li >
            <router-link
              to="/playlist"
              v-on:click.native="getPlaylist(playlist.playlist_id)"
              type="submit"
              >{{ playlist.playlist_name }}</router-link
            >
            <button
              id="removePlaylist"
              type="submit"
              @click="deletePlaylist(playlist.playlist_id)"
            >
            ✖
            </button>
          </li>
          </div>
        </ul>
      </aside>
      <div class="content">
        <router-view class="view"></router-view>
      </div>
    </div>
    <footer>
      <div id="yt-player"></div>
      <button @click="stop()">STOP</button>
      <button @click="resume()">RESUME</button>
      <div v-if="this.$route.path === '/playlist'">
        <button @click="playPreviousSong()">PLAY PREVIOUS SONG</button>
        <button @click="playNextSong()">PLAY NEXT SONG</button>
      </div>
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
      showInputField: false,
      playlist_name: "",
      active: false,
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
    toggle() {
      this.active = !this.active;
    },
    getPlaylist(value) {
      this.$store.dispatch("getPlaylist", value);
    },
    deletePlaylist(playlist_id) {
      if(window.confirm("Do you really want to remove playlist?")){
        this.$store.dispatch("deletePlaylist", playlist_id);
      }
    },
    search() {
      let searchq = this.searchquery;
      this.$store.dispatch("search", searchq);
      this.searchquery = "";
    },
    initYoutubePlayer() {
      window.player = new window.YT.Player("yt-player", {
        height: "400",
        width: "400",
        playerVars: {
          controls: 0,
          showInfo: 0,
        },
        events: {
          onStateChange: this.onPlayerStateChange,
        },
      });
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
    playNextSong() {
      let len = this.$store.state.userplaylist.length;
      let current = this.$store.state.currentSong.index;
      let next = current + 1;
      if (next < len) {
        window.player.loadVideoById(
          this.$store.state.userplaylist[next].videoId
        );
        let nextIndex = {
          index: next,
        };
        this.$store.dispatch("setCurrentSong", nextIndex);
      } else {
        alert("END OF PLAYLIST");
      }
    },
    playPreviousSong() {
      let current = this.$store.state.currentSong.index;
      let prev = current - 1;
      if (prev > -1) {
        window.player.loadVideoById(
          this.$store.state.userplaylist[prev].videoId
        );
        let prevIndex = {
          index: prev,
        };
        this.$store.dispatch("setCurrentSong", prevIndex);
      } else {
        alert("END OF PLAYLIST");
      }
    },
    toggleShowInputField() {
      this.showInputField = !this.showInputField;
    },
    createPlaylist() {
      this.$store.dispatch("createPlaylist", this.playlist_name);
      this.playlist_name = "";
      this.toggleShowInputField();
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.go(0);
    },
  },
};
</script>

<style>
@import "../assets/style.css";

li>a {
  padding: 0;
  padding-right: 5px;
}

li {
  margin-bottom: 20px;
}

li>button {
  margin: none;
}

.createPlaylistForm {
  display: flex;
  flex-direction: column;
}
</style>
