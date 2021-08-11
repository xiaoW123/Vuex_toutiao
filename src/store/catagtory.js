import axios from 'axios'

export default {
  namespaced: true,
  state: {
    catagtory: [],
    currentCatagtory: ''
  },
  actions: {
    async getCatagtory (context) {
      const { data: { data: { channels } } } = await axios.get('http://ttapi.research.itcast.cn/app/v1_0/channels')
      context.commit('updataCatagtory', channels)
      context.commit('updataCurrentCatagtory', channels[0].id)
    }
  },
  mutations: {
    //更新数组
    updataCatagtory(state, payload) {
      state.catagtory = payload
    },
    //更新激活分类
    updataCurrentCatagtory(state, payload) {
      state.currentCatagtory = payload
    }
  }
}