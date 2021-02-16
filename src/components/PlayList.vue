<template>
  <div>
    <h1>Innan Loopen</h1>
    <div v-for="(song, index) in getPlayListSongs" :key="index">
      <h1>I Loopen</h1>
      <SongCard v-bind:song="song" />
    </div>
  </div>
</template>

<script>
import SongCard from "./SongCard";

export default {
  props:{
    playlist: {}
  },
  components: {
    SongCard
  },

  computed: {
    getPlayListSongs() {
      return this.$store.state.userPlaylist;
    }
  }
}
</script>

<style>

</style>