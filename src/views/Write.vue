<template>
  <div id="write"> 
    <!-- <MarkdownPro v-model="content" on-upload-image="abc"/> -->
    <main>
      <el-dialog title="保存位置" :visible.sync="dialogFormVisible" :append-to-body="true">
        <el-form :model="form">
          <el-form-item label="文章名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="文章列表" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择保存位置" @change="selectChange($event)">
              <el-option v-for="(item, index) in classify" :label="item.name" :value="item.id" :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" :loading="sure" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </main>
    <mavon-editor style="height:100%;" ref="md" @imgAdd="$imgAdd"/>
    <el-button type="primary" :loading="loading" @click="handle">发布</el-button>
  </div>
</template>

<script>
import { server } from "../config/net.js";

export default {
  name:'Write',
  data() {
    return {
      value:'',
      sure:false,
      loading:false,
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
      formLabelWidth: '120px',
      classify:[],
      option:0
    }
  },
  methods:{
    $imgAdd(pos, $file){
      // 第一步.将图片上传到服务器.
      let formdata = new FormData();
      formdata.append('image', $file);
      this.$axios({
          url: `${server}/picture`,
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' },
      }).then((url) => {
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          // $vm.$img2Url 详情见本页末尾
          console.log(server+url.data);
          this.$refs.md.$img2Url(pos, server+url.data);
      });
    },
    handle(){
      this.dialogFormVisible = true;
      this.loading=true;
      // this.$store.state.issueLoading=true;
    },
    selectChange(event){
      this.option=event;
    },
    submit(){
      this.sure=true;
      let formdata = new FormData();
      formdata.append('artical', this.$refs.md.d_render);
      formdata.append('classify_id', this.option);
      formdata.append('title', this.form.name);
      this.$axios({
        url: `${server}/artical`,
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        console.log(res);
        this.dialogFormVisible=false;
        this.sure=false;
        this.$toast.open('发布成功');
      });
    },
    cancel(){
      this.dialogFormVisible = false;
    }
  },
  watch:{
    "dialogFormVisible":{
      handler(newVal){
        this.loading=newVal;
      }
    }
  },
  mounted() {
    // const id=this.$route.query.id; 
    // const articals=this.$store.state.selectClassify;
    // for(let essay in articals){
    //   if(essay.id===id){
    //     this.$refs.md.d_render=essay.artical;
    //     break;
    //   }
    // }

    this.$axios({
      url:`${server}/classifies`,
      // withCredentials:true,
      method:'GET',
    }).then(res=>{
      this.classify=res.data;
    }).catch(err=>{
      console.error(err);
    });
  }
}
</script>

<style scoped>
  #write{
    height: 100%;
  }
</style>