<template>
  <div>
    <div v-for="(song, index) in getPlayListSongs" :key="index">
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
      return this.$store.state.userplaylist;
    }
  }
}
</script>

<style>

</style>