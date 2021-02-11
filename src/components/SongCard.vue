<template>
  <div>
        <p>{{song.title}}</p>
        <p>{{song.artist}}</p>
        <img src="{{song.cover}}" alt="">
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