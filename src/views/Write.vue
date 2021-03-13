<template>
  <div id="write"> 
    <!-- <MarkdownPro v-model="content" on-upload-image="abc"/> -->
    <main class="alert_classify">
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="文章分类" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="javascript" value="shanghai"></el-option>
              <el-option label="typescript" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </main>
    <mavon-editor style="height:100%;" ref="md" @imgAdd="$imgAdd"/>
    <el-button type="primary" :loading="loading" @click="submit">发布</el-button>
  </div>
</template>

<script>
import { server } from "../config/net.js";

export default {
  name:'Write',
  data() {
    return {
      value:'',
      loading:false,
      dialogFormVisible: true,
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
    submit(){
      this.dialogFormVisible = true
      // let formdata = new FormData();
      // formdata.append('artical', this.$refs.md.d_render);
      // this.$axios({
      //   url: `${server}/artical`,
      //   method: 'post',
      //   data: formdata,
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // }).then((res) => {
      //   console.log(res);
      // });
    }
  }
}
</script>

<style scoped>
  #write{
    height: 100%;
  }

  .alert_classify{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2000;
  }
</style>