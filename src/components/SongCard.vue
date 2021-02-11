<template>
  <div>
        <img :src="song.thumbnails[0].url">
        <p>{{song.name}}</p>
        <p>{{song.artist.name}}</p>
        <!-- <p>{{song.thumbnails[0].url}}</p> -->
  </div>
</template>

<script>
export default {
    name: 'songcard',
    props: {
        song: Object
    }

}
</script>

<style>

</style>