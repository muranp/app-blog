import * as types from "../mutation-types";

const namespaced = true;

const state = () => ({
  // TODO: make it false
  counter: 0,
});

const getters = {
  currentCount: state => state.counter
};

const actions = {
  addCount({ commit }) {
    commit(types.ADD_COUNTER);
  }
};

const mutations = {
  [types.ADD_COUNTER](state) {
    state.counter += 1;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
