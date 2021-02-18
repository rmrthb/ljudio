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
          <li v-for="playlist in playlists" :key="playlist.playlist_id">
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
        </ul>
      </aside>
      <div class="content">
        <router-view class="view"></router-view>
      </div>
    </div>

    <footer>
      <img :src="currentSongPlaying.thumbnail"/>
      <p>{{currentSongPlaying.songname}}</p>
      <p>{{currentSongPlaying.artist}}</p>
      <div id="yt-player"></div>
      <div id="button-container">
          <a @click="playPreviousSong()">
        <img
          class="background-transparent smaller"
          src="../assets/previousbutton.png"
          alt=""
        />
      </a>  
      <a v-if="isPlaying" @click="updateIsPlaying()">
        <img
          class="background-transparent indexten"
          src="../assets/pausebutton.png"
          alt=""
        />
      </a>
      <a v-if="!isPlaying" @click="updateIsPlaying()">
        <img
          class="background-transparent indextwenty"
          src="../assets/Playbutton.png"
          alt=""
        />
      </a>
      <a @click="playNextSong()">
        <img
          class="background-transparent smaller"
          src="../assets/nextbutton.png"
          alt=""
        />
      </a>
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
      isPlaying: true,
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
    currentSongPlaying(){
      return this.$store.state.currentSong;
    }
  },
  created() {
    this.$store.dispatch("loadPlaylists");
  },
  mounted() {
    this.initYoutubePlayer();
  },
  methods: {
    updateIsPlaying() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        window.player.playVideo();
      } else {
        window.player.pauseVideo();
      }
    },
    toggle() {
      this.active = !this.active;
      console.log(this.active);
    },
    getPlaylist(value) {
      console.log("GET PLAYLIST");
      console.log(value);
      this.$store.dispatch("getPlaylist", value);
    },
    deletePlaylist(playlist_id){
      this.$store.dispatch("deletePlaylist", playlist_id)
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
          songname: this.$store.state.userplaylist[next].name,
          artist: this.$store.state.userplaylist[next].artist.name,
          thumbnail: this.$store.state.userplaylist[next].thumbnails[0].url
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
          songname: this.$store.state.userplaylist[prev].name,
          artist: this.$store.state.userplaylist[prev].artist.name,
          thumbnail: this.$store.state.userplaylist[prev].thumbnails[0].url
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
      this.toggleShowInputField();
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.go(0);
      console.log("Logged out");
    },
  },
};
</script>

<style>
@import "../assets/style.css";


</style>
