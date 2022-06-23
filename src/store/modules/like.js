import {reqLikes} from '@/api';
import { stubTrue } from 'lodash';

const state = {
  likes: []
};
const mutations = {
  RECEIVE_LIKES(state,likes){
    state.likes = likes;
  }
};
const actions = {
  async getLikes({commit}){
    let result = await reqLikes();
    if(result.code === 200){
      commit("RECEIVE_LIKES",result.data);
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