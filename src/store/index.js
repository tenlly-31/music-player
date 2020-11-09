import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    musicList: [],
    musicUrl: '',
    musicCover: '',
    hotComments: [],
    mvUrl: '',
    isShow: false,
    isPlaying: false,
  },
  mutations: {
    discClick(state){
      state.isPlaying = !state.isPlaying
    }
  },
  getters:{},
  modules: {},
  actions: {}
})

export default store