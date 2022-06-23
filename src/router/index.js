import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// 解决重复导航的问题

const originRouterPush = VueRouter.prototype.push;
const originRouterReplace = VueRouter.prototype.replace;
// 重写原型上的方法
VueRouter.prototype.push = function(location, onResolve,onReject){
  if(onResolve || onReject){
    return originRouterPush.call(this, location, onResolve, onReject)
  }
  return originRouterPush.call(this, location).catch(err=>{
    if(VueRouter.isNavigationFailure) return err;
    else throw err;
  });
};
VueRouter.prototype.replace = function(location, onResolve, onReject){
  if(onResolve || onReject){
    return originRouterReplace.call(this, location, onResolve, onReject);
  }
  return originRouterReplace.call(this, location).catch(err => {
    if(VueRouter.isNavigationFailure) return err;
    else throw err;
  });
};

Vue.use(VueRouter);
export default new VueRouter({
  mode:"history",
  routes
});