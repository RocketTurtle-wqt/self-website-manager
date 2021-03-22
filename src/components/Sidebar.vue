<template>
  <div id="siderbar">
    <el-menu  class="el-menu-vertical-demo"
              text-color="#303133"
              active-text-color="#409EFF"
              default-active="0">
      <el-menu-item v-for="(item, index) in this.$store.state.classify" @click="setClassify(item.id)" :index="index.toString()" :key="item.id">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
    <el-menu  class="el-menu-vertical-demo"
              text-color="#303133"
              active-text-color="#409EFF">
      <el-menu-item @click="showClassify">
        <i class="el-icon-circle-plus-outline"></i>
        <span slot="title">创建分类</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { server,getArticalsByClassifyId,getClassifies } from '../config/net.js';

export default {
  name:"Siderbar",
  data() {
    return {

    }
  },
  methods:{
    setClassify(classify_id){
      this.$axios({
        url:getArticalsByClassifyId,
        method:'GET',
        params:{
          classify_id
        }
      }).then(res=>{
        console.log(res);
        console.log(res.data);
        this.$store.state.selectClassify=res.data;
      }).catch(err=>{
        console.error(err);
      });
    },
    showClassify(){
      this.$store.state.showClassify=true;
    }
  },
  mounted(){
    this.$axios({
      url: getClassifies,
      method: 'GET',
    }).then((res) => {
      console.log(res);
      this.$store.state.classify=res.data;
      this.setClassify(res.data[0].id);
    });
  }
}
</script>

<style scoped>

</style>