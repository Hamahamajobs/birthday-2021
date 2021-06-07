import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    items(state) {
      return state.items;
    }
  },
  mutations: {
    setItems(state, data) {
      state.items.push(data);
    }
  },
  actions: {
    updateItems({ commit }, data) {
      commit('setItems', data);
    }
  }
});
