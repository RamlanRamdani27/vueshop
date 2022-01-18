import Vue from "vue";
import Vuex from "vuex";
import cart from "./cart";
import alert from "./alert";
import auth from "./auth";
import dialog from "./dialog";
import region from "./region";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    prevUrl: "",
    payment: [],
  },
  mutations: {
    setPrevUrl: (state, value) => {
      state.prevUrl = value;
    },
    setPayment: (state, value) => {
      state.payment = value;
    },
  },
  actions: {
    setPrevUrl: ({ commit }, value) => {
      commit("setPrevUrl", value);
    },
    setPayment: ({ commit }, value) => {
      commit("setPayment", value);
    },
  },
  modules: {
    cart,
    alert,
    dialog,
    auth,
    region,
  },
  getters: {
    prevUrl: (state) => state.prevUrl,
    payment: (state) => state.payment,
  },
});
