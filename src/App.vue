<template>
  <div id="app">
    <div id="background">
      <vue-particles color="#dedede"
      particlesNumber="3000"></vue-particles>
    </div>
    <main>      
      <router-view />
    </main>
  </div>
</template>

<style>
  @import url(./assets/css/clear_pc.css) all;

  @import url(./assets/css/clear_mobile.css) all;

  #app{
    background: gray;
  }

  html,body,#app{
    height: 100%;
  }

  #background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  #app>main{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
</style>
