<template>
  <div id="classify">
    <el-dialog title="创建分类" :visible.sync="dialogFormVisible" :append-to-body="true">
      <el-form :model="form">
        <el-form-item label="文章分类" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { server } from '../config/net.js';

export default {
  name:"Classify",
  data() {
    return {
      dialogFormVisible: false,
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
        url: `${server}/setClassify`,
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        console.log(res);
        this.$store.state.showClassify=false;
        this.$toast.open('分类创建成功');
      });
    }
  },
  watch:{
    "$store.state.showClassify":{
      handler(newVal){
        this.dialogFormVisible=newVal;
      }
    },
    "dialogFormVisible":{
      handler(newVal){
        console.log("进入");
        this.$store.state.showClassify=newVal;
        this.$store.state.issueLoading=false;
      }
    }
  }
}
</script>

<style scoped>
  
</style>