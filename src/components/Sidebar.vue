<template>
  <div id="siderbar">
    <el-menu  class="el-menu-vertical-demo"
              text-color="#303133"
              active-text-color="#409EFF"
              default-active="0">
      <!-- 待更改vuex中的state -->
      <el-menu-item v-for="(item, index) in this.$store.state.classify" 
                    @click="setCurrentClassify(item.id)" :index="index.toString()" 
                    :key="item.id">
        <!-- <i class="el-icon-menu"></i> -->
        <el-tooltip class="item" effect="dark" content="删除分类" placement="top-start">
          <i class="el-icon-delete" @click="deleteClickClassify(item.id)"></i>
        </el-tooltip>
        <span slot="title" class="font-addleft-instance">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
    <el-menu  class="el-menu-vertical-demo"
              text-color="#303133"
              active-text-color="#409EFF">
      <el-menu-item @click="showClassify">
        <i class="el-icon-circle-plus-outline"></i>
        <span slot="title" class="font-addleft-instance">创建分类</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { 
  getArticalNumberByClassifyId,
  getClassifies,deleteClassify 
} from '../config/net.js';

import { 
  SET_CURRENT_CLASSIFY_ID,
  SET_ARTICAL_NUMBER,
  SET_SELECT_CLASSIFY,
  OPEN_CLASSIFY_DIALOG,
  DELETE_CLASSIFY,
  SET_CLASSIFY
} from '../config/mutation-types.js';

import {
  mapMutations
} from 'vuex';

export default {
  name:"Siderbar",
  
  methods:{
    setCurrentClassify(classify_id){
      this.$axios({
        url:getArticalNumberByClassifyId,
        method:'GET',
        params:{
          classify_id
        }
      }).then(res=>{
        // console.log(res.data);
        // this.$store.state.currentClassifyId=classify_id;
        // this.$store.state.articalNumber=res.data.num;
        // this.$store.state.selectClassify=res.data.essays;
        this[SET_CURRENT_CLASSIFY_ID]({
          id:classify_id
        });
        this[SET_ARTICAL_NUMBER]({
          num:res.data.num
        });
        this[SET_SELECT_CLASSIFY]({
          essays:res.data.essays
        })
      }).catch(err=>{
        console.error(err);
      });
    },

    showClassify(){
      // this.$store.state.createClassifyDialog=true;
      this[OPEN_CLASSIFY_DIALOG]();
    },

    deleteClickClassify(id){
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
          // this.$store.state.classify=this.$store.state.classify.filter(classify=>{
          //   return classify.id!==id;
          // });
          // console.log('siderbar',id);
          this[DELETE_CLASSIFY]({
            id
          });
          this.$toast.success(res.data);
        }
      }).catch(err=>{
        this.$toast.error(`分类删除失败，${err.response.data}`);
      });
    },

    ...mapMutations([
      SET_CURRENT_CLASSIFY_ID,
      SET_ARTICAL_NUMBER,
      SET_SELECT_CLASSIFY,
      OPEN_CLASSIFY_DIALOG,
      DELETE_CLASSIFY,
      SET_CLASSIFY
    ])
  },

  mounted(){
    this.$axios({
      url: getClassifies,
      method: 'GET',
    }).then((res) => {
      // this.$store.state.classify=res.data;
      console.log(res.data);
      this[SET_CLASSIFY]({
        classifies:res.data
      });
      this.setCurrentClassify(res.data[0].id);
    });
  }
}
</script>

<style scoped>
  .font-addleft-instance{
    position: relative;
    left: 20px;
    text-align: right;
  }
</style>