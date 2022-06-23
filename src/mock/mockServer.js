import Mock from 'mockjs';
import baseCategoryList from './baseCategoryList.json';
import todayRecommendList from './todayRecommendList.json';
import rankList from './rankList.json';
import likes from './likes.json';
import brand from './brand.json'


// /api/product/getBaseCategoryList
// get
Mock.mock("/mock/product/getBaseCategoryList", {code:200, data:baseCategoryList});
Mock.mock("/mock/todayRecommendList", {code:200, data:todayRecommendList});
Mock.mock("/mock/rankList", {code:200, data:rankList});
Mock.mock("/mock/likes", {code:200, data:likes});
Mock.mock("/mock/brand", {code:200, data:brand});
