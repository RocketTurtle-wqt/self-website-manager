<template>
  <div id="app">
    <!-- <div class="canvas-background">
      <vue-particles color="#dedede"></vue-particles>
    </div> -->
    <main>      
      <nav class="top">
        <Nav></Nav>
      </nav>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name:'App',
  components:{
    Nav
  }
}
</script>

<style>
  @import url(./assets/css/clear_pc.css) all;

  @import url(./assets/css/clear_mobile.css) all;

  #app{
    background: gray;
    /* overflow: scroll; */
  }

  html,body,#app{
    height: 100%;
  }

  .canvas-background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  #app>main{
    position: absolute;
    width: 100%;
    height: 90%;
    z-index: 2;
  }

  .top{
    height: 10%;
  }
</style>
