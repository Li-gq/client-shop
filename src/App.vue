<template>
  <div>
    <Header/>
    <TypeNav/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isFideFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
