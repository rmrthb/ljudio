<template>
  <div>
    <form @submit.prevent>
      <input v-model="searchquery" type="text" placeholder="Search" />
      <button type="submit" @click="search()">SEARCH</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchquery: "",
    };
  },
  methods: {
    search() {
      let searchq = this.searchquery;

      this.$store.dispatch("search", searchq);
    },
  },
};
</script>

<style></style>
