<template>
  <div id="container">
    <div id="card" @click="playSong()">
      <img :src="song.thumbnails[0].url" id="cover" />
      <p id="song">{{ song.name }}</p>
      <p id="artist">{{ song.artist.name }}</p>
      <!-- <p>{{song.thumbnails[0].url}}</p> -->
      <button class="button" @click="toggleShowList(song)">
        Add to playlist
      </button>

      <ul v-if="showList">
        <h4>Select Playlist</h4>
        <li v-for="playlist in playlists" :key="playlist.playlist_id">
          <span>
            <a href="#" @click="addToPlayList(playlist.playlist_id, song)">{{
              playlist.playlist_name
            }}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "songcard",
  props: {
    song: Object,
  },
  
  data() {
    return { showList: false };
  },
  methods: {
    playSong(){
      window.player.loadVideoById(this.song.videoId);
      window.player.playVideo();
    },
  
    addToPlayList(playlist_id, song) {
      console.log("i Methods addtoplaylist");
      console.log(JSON.stringify(playlist_id));
      console.log(JSON.stringify(song));
      this.$store.dispatch("addToPlayList", { playlist_id, song });
    },
    toggleShowList() {
      this.showList = !this.showList;
    },
  },
  computed: {
    playlists() {
      return this.$store.state.playlists;
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  width: 100%;
}
#card {
  background: transparent;
  width: 95%;
  color: white;
  border: solid rgb(21, 68, 150);
  margin-top: 0.8vh;
  align-content: center;
  display: flex;
  justify-content: space-between;
}
ul {
  margin:0;
  padding:0; 
  width: 150px;
  list-style: none;
  /* Test */
  position: absolute;
  left: 780px;
  background: black;
  color: white;
  z-index: 1;
  text-align: center;
  border : 2px solid white;
  border-radius:15px;

}
a {
  color: white;
  text-decoration: none;
  
}
a:hover{
  border: white;
  text-decoration: underline;
}
li{
  align-content: center;
  text-align: center;
}
h4{
  align-content: center;
}

</style>
