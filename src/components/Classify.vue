<template>
  <div id="classify">
    <el-dialog title="创建分类" :visible.sync="$store.state.createClassifyDialog" :append-to-body="true">
      <el-form :model="form">
        <el-form-item label="文章分类" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="quitClassifyDialog">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { publishClassify } from '../config/net.js';
import {mapMutations} from 'vuex';
import {
  QUIT_CLASSIFY_DIALOG,
  ADD_CLASSIFY
} from '../config/mutation-types.js';

export default {
  name:"Classify",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    submit(){
      let formdata = new FormData();
      formdata.append('name',this.form.name);
      this.$axios({
        url: publishClassify,
        method: 'POST',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(res => {
        this[QUIT_CLASSIFY_DIALOG]();
        if(res.status===200){
          this[ADD_CLASSIFY]({
            newClassify:res.data
          });
          this.$toast.success('创建分类成功');
        }
      }).catch(err=>{
        this[QUIT_CLASSIFY_DIALOG]();
        if(err.response.status===409){
          this.$toast.error('创建分类失败，分类已存在');
        }
      });
    },
    ...mapMutations([
      QUIT_CLASSIFY_DIALOG,
      ADD_CLASSIFY
    ])
  }
}
</script>

<style scoped>
  
</style>