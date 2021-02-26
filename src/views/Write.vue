<template>
  <div id="write"> 
    <!-- <MarkdownPro v-model="content" on-upload-image="abc"/> -->
    <mavon-editor ref="md" v-model="value" @imgAdd="$imgAdd"/>
  </div>
</template>

<script>
import { host } from "../config/server_config.js";

export default {
  name:'Write',
  data() {
    return {
      value:''
    }
  },
  methods:{
    $imgAdd(pos, $file){
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('image', $file);
      this.$axios({
          url: 'http://127.0.0.1:7002/artical',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' },
      }).then((url) => {
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          // $vm.$img2Url 详情见本页末尾
          console.log(host+url.data);
          this.$refs.md.$img2Url(pos, host+url.data);
      });
    }
  }
}
</script>

<style scoped>
  
</style>