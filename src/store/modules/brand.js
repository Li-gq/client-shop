import {reqBrandList} from '@/api';

const state = {
  brandList: []
};
const mutations = {
  RECEIVE_BRAND_LIST(state,brandList){
    state.brandList = brandList;
  }
};
const actions = {
  async getBrandList({commit}){
    let result = await reqBrandList();
    if(result.code === 200){
      commit("RECEIVE_BRAND_LIST", result.data)
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}