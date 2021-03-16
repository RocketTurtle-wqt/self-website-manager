<template>
  <div id="siderbar">
    <el-menu default-active="0"
             class="el-menu-vertical-demo">
      <el-menu-item v-for="(item, index) in classify" @click="setClassify(item.id)" :index="index.toString()" :key="item.id">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { server } from '../config/net.js';

export default {
  name:"Siderbar",
  data() {
    return {
      classify:[],
    }
  },
  methods:{
    setClassify(classify_id){
      this.$axios({
        url:`${server}/classify_id`,
        method:'GET',
        params:{
          classify_id
        }
      }).then(res=>{
        console.log(res);
        this.$store.state.selectClassify=res.data;
      }).catch(err=>{
        console.error(err);
      });
    }
  },
  mounted(){
    this.$axios({
      url: `${server}/classifies`,
      method: 'GET',
    }).then((res) => {
      console.log(res);
      this.classify=res.data;
    });
  }
}
</script>

<style scoped>
  
</style>