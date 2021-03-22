<template>
  <div id="show">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="item in articals" :title="item.title" :name="item.id" :key="item.id">
        <div id="mainBody">
          <div>
            <router-link :to="`/write/${item.id}`">编辑</router-link>
            <el-divider direction="vertical"></el-divider>
            <span class="delete-essay" @click="deleteArtical(item.id)">删除</span>
            <el-divider direction="vertical"></el-divider>
            <span>{{item.time}}</span>
          </div>
        </div>
        <main v-html="item.artical" class="markdown-body"></main>
      </el-collapse-item>
    </el-collapse>
    <el-pagination
      class="bottom"
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      :total="pageNumber"
      @prev-click="prevPage"
      @next-click="nextPage"
      @current-change="pageChange">
    </el-pagination>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";
import {deleteArticalById} from '../config/net.js';

export default {
  name:"show",
    data() {
    return {
      activeNames: ['1'],
      currentPage: 1
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    deleteArtical(id){
      this.$axios({
        url: deleteArticalById,
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
        this.$toast.success(res.data);
      });
    },
    prevPage(){
      this.currentPage--;
    },
    nextPage(){
      this.currentPage++;
    },
    pageChange(val){
      this.currentPage=val;
    }
  },
  computed:{
    pageNumber(){
      const num=this.$store.state.selectClassify.length;
      if(num%6){
        return (Math.floor(num/5)+1)*10;
      }else{
        return num/5*10;
      }
    },
    articals(){
      let essays=this.$store.state.selectClassify;
      essays=essays.slice((this.currentPage-1)*5,Math.min(this.currentPage*5,essays.length));
      return essays;
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
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  #mainBody{
    display: flex;
    justify-content: flex-end;
  }
  
  #mainBody>div>a{
    color: lightblue;
  }


  .delete-essay{
    color: lightcoral;
  }

  .delete-essay:hover{
    cursor: pointer;
  }

  .bottom{
    display: flex;
    justify-content: center;
  }
</style>