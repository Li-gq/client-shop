<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enter" @mouseleave="leave">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(c1, index) in baseCategoryList"
                :key="c1.categoryId"
                @mouseenter="changeIndex(index)"
                :class="{active: currentIndex === index}"
              >
                <h3>
                  <a href="javascript:;">{{ c1.categoryName }}</a>
                </h3>
                <div
                  class="item-list clearfix"
                  :class="{ showItem: currentIndex === index }"
                >
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a href="javascript:;">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href="javascript:;">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {throttle} from "lodash";

export default {
  name: "TypeNav",
  data() {
    return {
      isShow: this.$route.path === "/",
      currentIndex: -2,
    };
  },
  computed: {
    ...mapState({
      baseCategoryList: (state) => state.typeNav.baseCategoryList,
    }),
  },
  mounted() {
    this.getBaseCategoryList();
  },
  methods: {
    // 改变index使用节流处理
    changeIndex: throttle(
      function(index){
        if(this.currentIndex !== -2){
          this.currentIndex = index;
          console.log(index);
        }
      }
    , 200),
    async getBaseCategoryList() {
      try {
        await this.$store.dispatch("getBaseCategoryList");
      } catch (error) {
        alert(error.message);
      }
    },
    enter() {
      this.currentIndex = -1;
      this.isShow = true;
    },
    leave() {
      this.currentIndex = -2;
      this.isShow = this.$route.path === "/";
    },
  },
  watch:{
    $route:{
      handler(newValue,oldValue){
        this.isShow = newValue.path === "/";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
          .showItem {
            display: block;
          }
        }
        .active{
          background-color: rgb(214, 213, 213);
        }
      }
      &.slide-enter, &.silde-leave-to{
        opacity: 0;
        height: 0;
      }
      &.slide-enter-active,&.slide-leave-active{
        transition: all 1s;
      }
    }
  }
}
</style>
