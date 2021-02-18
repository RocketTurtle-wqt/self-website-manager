<template>
  <div id="write"> 
    <!-- <MarkdownPro v-model="content" on-upload-image="abc"/> -->
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
// import { MarkdownPro } from 'vue-meditor'

export default {
  name:'Write',
  data() {
    return {
      value:''
    }
  },
  // methods:{
  //   abc(){
  //     console.log("进入");
  //   }
  // },
  // components:{
  //   MarkdownPro
  // }
}
</script>

<style scoped>
  
</style>