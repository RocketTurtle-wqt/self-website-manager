<template>
  <div id="show">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(item, index) in this.$store.state.selectClassify" :title="item.title" :name="index" :key="item.classify_id">
        <main v-html="item.artical" class="markdown-body"></main>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

export default {
  name:"show",
    data() {
    return {
      activeNames: ['1'],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
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
  }
</style>