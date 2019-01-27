import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '../api'

Vue.use(Vuex)

const state = {
  adminInfo: {
    avatar: 'default.jpg'
  }
}

const mutations = {
  saveAdminInfo (state, adminInfo) {
    state.adminInfo = adminInfo
  }
}

const actions = { // mutation 必须同步, action 可以异步
  async getAdminData ({commit}) { // 参数解构 context
    try {
      const res = await getAdminInfo()
      if (res.status === 1) {
        commit('saveAdminInfo', res.data) // context.commit
      } else {
        throw new Error(res.type)
      }
    } catch (err) {
      // console.log(err.message)
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
