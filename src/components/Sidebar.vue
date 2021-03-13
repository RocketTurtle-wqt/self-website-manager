<template>
  <div id="siderbar">
    <el-menu>
      <el-menu-item v-for="(value, index) in classify" :key="index">
        <i class="el-icon-menu"></i>
        <span slot="title">{{value}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:"Siderbar",
  data() {
    return {
      classify:[
        'javascript',
        'typescript',
        'css',
      ]
    }
  },
}
</script>

<style scoped>
  
</style>