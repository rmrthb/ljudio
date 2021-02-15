<template>
  <div id="container">
    <div id="card">
      <img :src="song.thumbnails[0].url" id="cover" />
      <p id="song">{{ song.name }}</p>
      <p id="artist">{{ song.artist.name }}</p>
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
  width: 100%;
}
#card {
  background: transparent;
  width: 95%;
  color: white;
  border: 0.1vw solid white;
  margin-top: 0.8vh;
  align-content: center;
  display: flex;
  justify-content: space-between;
}
</style>
