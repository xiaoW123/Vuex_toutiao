import { createStore } from 'vuex'
import catagtory from './catagtory.js'
import newlist from './newlist.js'


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    catagtory,
    newlist
  },
  getters: {
    //快速访问
    catagtory: state => state.catagtory.catagtory,
    currentCatagtory: state => state.catagtory.currentCatagtory,
    currentList: state => state.newlist.allData[state.catagtory.currentCatagtory] || []
  }
})
