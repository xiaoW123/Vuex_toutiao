import axios from "axios"

export default {
  namespaced: true,
  state: {
    allData: {}
  },
  mutations: {
    updateList(state, {currentCatagtory, list}) {
      // 这句代码的含义 就相当于 在一个新的对象后面追加了一个属性  更新某个属性的内容
      state.allData = { ...state.allData, [currentCatagtory]: list }
    }
  },
  actions: {
    async getNewList(context, cataId) {
      const {data: {data: {results}}} = await axios
      .get(`http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
      context.commit('updateList', { currentCatagtory: cataId, list: results })
      console.log(results)
    }
  }
}