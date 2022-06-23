import ajax from './ajax';
import mockAjax from './mockAjax';

export function reqJokeList(){
  return ajax({
    url: "/joke/content/list.php",
    method: "get",
    params:{
      sort: "asc",
      time: "1418816972",
      key: "a00a2c7c9c3d7e7732b1f453141819f1"
    }
  });
};
// /api/product/getBaseCategoryList

export function reqBaseCategoryList(){
  return mockAjax({
    url:"/product/getBaseCategoryList",
    method:"get"
  });
};
export function reqTodayRecommendList(){
  return mockAjax({
    url:"/todayRecommendList",
    method:"get"
  });
};
export function reqRankList(){
  return mockAjax({
    url:"/rankList",
    method:"get"
  });
};
export function reqLikes(){
  return mockAjax({
    url:"/likes",
    method:"get"
  });
};
export function reqBrandList(){
  return mockAjax({
    url:"/brand",
    method:"get"
  });
};
