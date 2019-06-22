import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // token: JSON.parse(localStorage.getItem('token')) || '',
    // user: JSON.parse(localStorage.getItem('user')) || '',
  },
  mutations: {
    setToken(state,token){
      state.token = token;
      localStorage.setItem('token',token);
    },
    setUser(state,user){
      state.token = user;
      localStorage.setItem('user',user)
    }
  },
  actions: {
    getToken( ctx, exp){
      let result ={
        success: false,
        token: {}
      }
      let tokenExp = state.token.token_exp;
      if( new Date().getTime() - tokenExp > exp){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } else{
        result.success = true;
        let token = localStorage.getItem('token');
        result.token = token.token;
      }
      return result
    }
  }

})
