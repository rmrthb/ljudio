<template>
  <div id="container">
    <div id="card">
      <img :src="song.thumbnails[0].url" id="cover" />
      <p id="song">{{ song.name }}</p>
      <p id="artist">{{ song.artist.name }}</p>
      <!-- <p>{{song.thumbnails[0].url}}</p> -->
      <button class="button" @click="toggleShowList(song) ">Add to playlist</button>

      
      <ul v-if="showList">
        <h4>Choose Playlist</h4>
        <li v-for="playlist in playlists" :key="playlist.playlist_id">
          <span>
            <a href="#" @click="addToPlayList({object:playlist.playlist_id,song})">{{
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
    addToPlayList({playlist_id, song}) {
      console.log('i Methods addtoplaylist')
      console.log(JSON.stringify(playlist_id));
      console.log(JSON.stringify(song));
      this.$store.dispatch("addToPlayList", {playlist_id, song});
    },
    toggleShowList() {
      this.showList = !this.showList;
    },
  },
  computed:{      
    playlists() {
      return this.$store.state.playlists;
    },
  }
};


</script>

<style scoped>
#container {
  display: flex;
  width: 75vw;
  margin-left: 30vw;
  justify-content: space-evenly;
}
#card {
  background-image: linear-gradient(rgb(46, 114, 230), rgb(21, 68, 150));
  width: 25vw;
  color: white;
  border: solid rgb(21, 68, 150);
  margin-top: 0.8vh;
  align-content: center;
  display: flex;
  justify-content: space-between;
}
ul{
    list-style: none;
}
</style>
