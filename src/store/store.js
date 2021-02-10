import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {},
  mutations: {
  },
  actions: {
    async registerUser(user){
      let response = await fetch('http://localhost:3000/api/users',{
        method: 'post',
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      console.log(JSON.stringify(user));
      await response.json()
    }
  },
  modules: {}
});
