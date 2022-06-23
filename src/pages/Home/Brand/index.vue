<template>
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item" v-for="brand in brandList" :key="brand.id">
          <img :src="brand.imgUrl" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Brand",
  computed:{
    ...mapState({brandList: state => state.brand.brandList})
  },
  mounted(){
    this.getBrandList();
  },
  methods:{
    getBrandList(){
      this.$store.dispatch("getBrandList");
    }
  }
};
</script>

<style lang="less" scoped>
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
