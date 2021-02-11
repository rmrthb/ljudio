<template>
  
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
            return this.$store.getters.searchResults;
        }
    }



}
</script>

<style>

</style>