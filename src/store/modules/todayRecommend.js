import {reqTodayRecommendList} from '@/api';

const state = {
  todayRecommendList:[]
};
const mutations = {
  RECEIVE_TODAY_RECOMMEND_LIST(state,todayRecommendList){
    state.todayRecommendList = todayRecommendList;
  }
};
const actions = {
  async getTodayRecommendList({commit}){
    const result = await reqTodayRecommendList();
    if(result.code === 200){
      commit("RECEIVE_TODAY_RECOMMEND_LIST", result.data);
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