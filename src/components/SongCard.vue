<template>
  <div id="container">
    <div id="card">
      <img :src="song.thumbnails[0].url" id="cover" />
      <p id="song">{{ song.name }}</p>
      <p id="artist">{{ song.artist.name }}</p>
      <!-- <p>{{song.thumbnails[0].url}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "songcard",
  props: {
    song: Object
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
</style>
