<template>
  <div id="nav" v-show="this.$store.state.loginStatus">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) of content" :index="item.route" @click="skip(item.route)" 
      :key="index">
        {{item.name}}
        <!-- <router-link :to="item.route">{{item.name}}</router-link> -->
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:"Nav",
  data() {
    return {
      activeIndex:'0',
      current: '',
      content:[
        {
          name:'文章管理',
          route:'/artical'
        },
        {
          name:'vlog',
          route:'/vlog'
        },
        {
          name:'创作文章',
          route:'/write'
        },
        {
          name:'网站流量',
          route:'/traffic'
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    skip(route){
      if(route===this.$route.path){
        return;
      }
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>

</style>