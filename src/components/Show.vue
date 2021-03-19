<template>
  <div id="show">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(item, index) in this.$store.state.selectClassify" :title="item.title" :name="index" :key="item.id">
        <div id="mainBody">
          <router-link :to="`/write?id=${item.id}`">编辑</router-link>
          <el-divider direction="vertical"></el-divider>
          <span class="delete-essay" @click="deleteArtical(item.id)">删除</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{item.time}}</span>
        </div>
        <main v-html="item.artical" class="markdown-body"></main>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";
import {server} from '../config/net.js';

export default {
  name:"show",
    data() {
    return {
      activeNames: ['1'],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    deleteArtical(id){
      this.$axios({
        url: `${server}/deleteArtical`,
        method: 'POST',
        data: {
          id
        },
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        let ownEle=this.$store.state.selectClassify;
        this.$store.state.selectClassify=ownEle.filter(artical=>{
          return artical.id!==id;
        });
      });
    }
  }
}
</script>

<style scoped>
  #show{
    background: white;
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    overflow: auto;
  }

  #mainBody{
    display: flex;
    justify-content: flex-end;
  }
  
  #mainBody>a{
    color: lightblue;
  }


  .delete-essay{
    color: lightcoral;
  }

  .delete-essay:hover{
    cursor: pointer;
  }
</style>