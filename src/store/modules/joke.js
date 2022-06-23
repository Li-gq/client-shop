import {reqJokeList} from '@/api';

const state = {
  jokeList: []
};
const mutations = {
  RECEIVE_JOKE_LIST(state,jokeList){
    state.jokeList = jokeList;
  }
};
const actions = {
  async getJokeList({commit}){
    const result = await reqJokeList();
    if (result.error_code === 0){
      commit("RECEIVE_JOKE_LIST",result.result.data);
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