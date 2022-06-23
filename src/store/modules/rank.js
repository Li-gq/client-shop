import {reqRankList} from '@/api'
const state = {
  rankList : []
};
const mutations = {
  RECEIVE_RANK_LIST(state, rankList){
    state.rankList = rankList;
  }
};
const actions = {
  async getRankList({commit}){
    let result = await reqRankList();
    if(result.code === 200){
      commit("RECEIVE_RANK_LIST", result.data);
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