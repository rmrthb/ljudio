<template>
  <div>
      <div v-for="(song, index) in getSearchResults" :key="index">
        <SongCard v-bind:song="song" />
      </div>
  </div>
</template>

<script>
import SongCard from './SongCard'

export default {
    name: 'searchresult',

    components: {
        SongCard
    },

    computed: {
        getSearchResults(){
            return this.$store.state.searchresult;
        }
    }
}
</script>

<style>

</style>