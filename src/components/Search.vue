<template>
    <div>
        <input v-model="searchquery" type="text" placeholder="Search">
    </div>
</template>

<script>
export default {
    name: 'search',
    data(){
        return {
            searchquery: ''
        };
    },
    methods: {
        search(){
            let searchq = {
                searchquery = this.searchquery
            }
            this.$store.commit('search', searchq);

        } 
    }
}
</script>

<style>

</style>