import Vue from 'vue'
import App from './App.vue'
// import {createStore} from 'vuex'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    dragons: []
  },
  mutations: {
    addDragon(state, dragon){
      state.dragons = [...state.dragons, dragon]
    }
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
