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
  </div>
</template>

<script>
import Siderbar from "../components/Sidebar.vue";
import Nav from "../components/Nav.vue";
import Show from "../components/Show.vue";

export default {
  name:'Artical',
  components:{
    Siderbar,
    Nav,
    Show
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
  }

  @media screen and (max-width: 991px) {
    .left{
      width: 100%;
    }
  }
</style>