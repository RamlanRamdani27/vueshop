export default {
  namespaced: true,
  state: {
    status: false,
    color: "success",
    text: "",
  },
  mutations: {
    set: (state, paylaod) => {
      state.status = paylaod.status;
      state.text = paylaod.text;
      state.color = paylaod.color;
    },
  },
  actions: {
    set: ({ commit }, paylaod) => {
      commit("set", paylaod);
    },
  },
  getters: {
    status: (state) => state.status,
    color: (state) => state.color,
    text: (state) => state.text,
  },
};
