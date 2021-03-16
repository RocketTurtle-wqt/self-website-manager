<template>
  <div id="artical"> 
    <nav class="top">
      <Nav></Nav>
    </nav>
    <div class="container">
      <nav class="left">
        <Siderbar></Siderbar>
      </nav>
      <main class="show">
        <Show></Show>
      </main>
    </div>
    <main class="classify_alert">
      <Classify></Classify>
    </main>
  </div>
</template>

<script>
import Siderbar from "../components/Sidebar.vue";
import Nav from "../components/Nav.vue";
import Show from "../components/Show.vue";
import Classify from '../components/Classify.vue';

export default {
  name:'Artical',
  components:{
    Siderbar,
    Nav,
    Show,
    Classify
  }
}
</script>

<style scoped>
  #artical{
    background: red;
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  .container{
    display: flex;
    flex: 1;
  }

  @media screen and (min-width: 992px) {

    .left{
      width: 250px;
    }

    .show{
      flex: 1;
    }

    .top{
      height: 10%;
      background-color: gray;
    }

    .container{
      height: 90%;
    }

    .classify_alert{
      background-color: blue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }

  @media screen and (max-width: 991px) {
    .left{
      width: 100%;
    }
  }
</style>