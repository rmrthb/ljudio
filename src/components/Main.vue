<template>
  <div id="main">
    <div class="wrapper">
      <header>
        <form @submit.prevent>
          <input v-model="searchquery" type="text" placeholder="Search" />
          <router-link
            v-on:click.native="search()"
            to="/searchresult"
            type="submit"
            value="Search"
          >
            Search
          </router-link>
        </form>
        <p>{{ user.first_name }}</p>
      </header>
      <aside>
        <div class="logo-container">
          <img class="logo" src="../assets/logo.png" />
        </div>
        <ul>
          <li v-for="playlist in playlists" :key="playlist.playlist_id">
            <span>
              <router-link to="/playlist">{{
                playlist.playlist_name
              }}</router-link>
            </span>
          </li>
        </ul>
      </aside>
      <div class="content">
        <router-view class="view"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      searchquery: "",
    };
  },
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    playlists() {
      return this.$store.state.playlists;
    },
  },
  created() {
    this.$store.dispatch("loadPlaylists");
  },
  methods: {
    search() {
      let searchq = this.searchquery;
      console.log("Det fungerade");
      this.$store.dispatch("search", searchq);
    },
  },
};
</script>

<style>
/* * {
  box-sizing: border-box;
} */
html {
  height: 100%;
}

body {
  height: 100%;
}



#app {
  height: 100%;
}

#main {
  height: 100%;
}

template {
  height: 100%;
}

#header {
  height: 100%;
}

.wrapper {
  display: grid;
  grid-template-rows: repeat(8, 12.5%);
  grid-template-columns: repeat(4, 20%);
  height: 100%;
}

header {
  grid-column-start: 2;
  grid-column-end: 6;
  display: flex;
  justify-content: space-between;
  background: black;
}
header > form {
  /* vertical-align: middle; */
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 30px;
}
header > p {
  font-weight: bold;
  color: white;
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 30px;
}
aside {
  background-color: black;
  grid-row-start: 1;
  grid-row-end: 9;
  height: 100%;
  color: white;
}

.logo-container {
  width: 12vh;
}

.logo {
  width: 12vh;
  padding: 30px;
  /* object-fit:cover; */
}

aside > ul {
  display: inline;
  list-style: none;
  margin: none;
}

aside > ul > li {
  float: left;
  clear: left;
  padding: 20px;
}

.content {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 9;
  background: black;
}

.content {
  background-color: rgb(21, 68, 150);
  overflow: auto;
}
</style>
