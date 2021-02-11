import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    },
    searchresult: [],
    song: {
      title: '',
      artist: '',
      cover: '',
    },
  },
  mutations: {
    // register: (state, user)=>{
    //   state.users.push(user)
    // }
    register(state, value) {
      state.user = value;
    },
    setUser(state, value) {
      state.user = value;
    }
  },
  actions: {
    async registerUser({ commit }, user) {
      let response = await fetch('http://localhost:3000/api/users', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      console.log("SUCCESS");
      await response.json()
      commit("register", user);
    },
    async login({dispatch}, credentials){
      console.log(credentials);
      let response = await fetch('http://localhost:3000/api/login',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(credentials)
      })
      await response.json()
      dispatch('checkAuth')
    },
    async checkAuth({commit}){
      let response = await fetch('http://localhost:3000/api/login', { credentials: 'include', mode: 'cors' })
      let data = await response.json()
      let user = data
      commit('setUser', user)
    }

  },
  getters: {
    searchResult(state){
      return state.searchresult;
    }
  },
  modules: {}
});
