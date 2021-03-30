<template>
  <div id="show">
    <el-collapse>
      <el-collapse-item v-for="item in this.$store.state.selectClassify" :title="item.title" :name="item.id" :key="item.id">
        <div class="editor-delete-container">
          <div>
            <router-link :to="`/write/${item.id}`">编辑</router-link>
            <el-divider direction="vertical"></el-divider>
            <el-popover
              placement="top"
              width="160"
              :ref="`popclick-${item.id}`">
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancel(item.id)">取消</el-button>
                <el-button type="primary" size="mini" @click="sure(item.id)">确定</el-button>
              </div>
              <span class="delete-essay" slot="reference">删除</span>
            </el-popover>
            <el-divider direction="vertical"></el-divider>
            <span>{{item.time}}</span>
          </div>
        </div>
        <main v-html="item.artical" class="markdown-body"></main>
      </el-collapse-item>
    </el-collapse>
    <el-pagination
      class="paginate-bottom"
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
import {deleteArticalById,getArticalsByClassifyIdAndPage} from '../config/net.js';

export default {
  name:"Show",

  data() {
    return {
      currentPage: 1,
    };
  },

  methods: {

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

    sure(id){
      console.log('进入');
      this.deleteArtical(id);
    },

    cancel(id){
      this.$refs[`popclick-${id}`][0].showPopper=false;
    },

    prevPage(val){
      this.currentPage=val;
    },

    nextPage(val){
      this.currentPage=val;
    },

    pageChange(val){
      this.currentPage=val;
      this.$axios({
          url:getArticalsByClassifyIdAndPage,
          method:'GET',
          params:{
            classify_id:this.$store.state.currentClassifyId,
            page:this.currentPage
          }
        }).then(res=>{
          this.$store.state.selectClassify=res.data;
        });
    }
  },

  computed:{
    pageNumber(){
      const num=this.$store.state.articalNumber;
      if(num%6){
        return (Math.floor(num/5)+1)*10;
      }else{
        return num/5*10;
      }
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

  .editor-delete-container{
    display: flex;
    justify-content: flex-end;
  }
  
  .editor-delete-container>div>a{
    color: lightblue;
  }

  .delete-essay{
    color: lightcoral;
  }

  .delete-essay:hover{
    cursor: pointer;
  }

  .paginate-bottom{
    display: flex;
    justify-content: center;
  }

  /* .bottom{
    display: flex;
    justify-content: center;
  } */
</style>