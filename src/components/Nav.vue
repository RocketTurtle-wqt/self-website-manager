<template>
  <div id="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(value, index) of content" :index="index.toString()" @click="showClassify(index)" :key="index">
        {{value}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:"Nav",
  data() {
    return {
      activeIndex: '0',
      content:[
        '文章管理',
        '创建分类',
        'vlog',
        '网站流量'
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showClassify(index){
      if(this.content[index]==='创建分类'){
        this.$store.state.showClassify=true;
      }
    }
  }
}
</script>

<style scoped>
  
</style>