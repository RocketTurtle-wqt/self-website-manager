<template>
  <div id="siderbar">
    <el-menu  class="el-menu-vertical-demo"
              text-color="#303133"
              active-text-color="#409EFF"
              default-active="0">
      <el-menu-item v-for="(item, index) in this.$store.state.classify" @click="setClassify(item.id)" :index="index.toString()" :key="item.id">
        <!-- <i class="el-icon-menu"></i> -->
        <i class="el-icon-delete" @click="deleteClassify(item.id)"></i>
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
import { getArticalNumberByClassifyId,getClassifies,deleteClassify } from '../config/net.js';

export default {
  name:"Siderbar",
  data() {
    return {

    }
  },
  methods:{
    setClassify(classify_id){
      this.$axios({
        url:getArticalNumberByClassifyId,
        method:'GET',
        params:{
          classify_id
        }
      }).then(res=>{
        console.log(res.data);
        this.$store.state.currentClassify=classify_id;
        this.$store.state.articalNumber=res.data.num;
        this.$store.state.selectClassify=res.data.essays;
      }).catch(err=>{
        console.error(err);
      });
    },
    showClassify(){
      this.$store.state.showClassify=true;
    },
    deleteClassify(id){
      console.log('-id-',id);
      this.$axios({
        url:deleteClassify,
        method:'POST',
        data:{
          classify_id:id
        },
        header:{
          'Content-type':'application/json'
        }
      }).then(res=>{
        if(res.status===200){
          this.$toast.success(res.data);
        }
      }).catch(err=>{
        this.$toast.error(`分类删除失败，${err.response.data}`);
      });
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