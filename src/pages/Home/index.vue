<template>
  <div>
    <ListContainer/>
    <TodayRcommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer';
import TodayRcommend from './TodayRcommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
export default {
  name: 'Home',
  components:{
    ListContainer,
    TodayRcommend,
    Rank,
    Like,
    Floor,
    Brand,
    ListContainer
  },
  mounted(){
    // 发送请求获取笑话，每天只能获取50次，所以不用giant数据就先注释掉
    // this.getJokeList();
  },
  methods:{
    getJokeList(){
      this.$store.dispatch('getJokeList');
    }
  }
}
</script>

<style lang="less" scoped>

</style>
