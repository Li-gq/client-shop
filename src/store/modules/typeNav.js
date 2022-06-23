import { reqBaseCategoryList } from "@/api";

const state = {
  baseCategoryList :  []
};
const mutations = {
  RECEIVE_BASE_CATEGORY_LIST(state, baseCategoryList){
    state.baseCategoryList = baseCategoryList.slice(0,15);
  }
};
const actions = {
  async getBaseCategoryList({commit}){
    try {
      const result = await reqBaseCategoryList();
      if (result.code == 200){
        commit("RECEIVE_BASE_CATEGORY_LIST", result.data)
        return "ok";
      }
    } catch (error) {
      return Promise.reject("fail");
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};