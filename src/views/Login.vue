<template>
  <div id="login">
    <main>
      <transition name="showLogin"
                  appear>      
        <div>
          <h1>登陆</h1>
          <div id="input">
            <!-- <label for="user">登陆密钥</label> -->
            <input type="password" id="user" v-model="userkey" placeholder="登陆密钥"><br>
          </div>
          <div id="check">
            <input type="text" v-model="loginForm.pictureCode">
            <div @click="refreshCode">
              <Sidentify :identifyCode="loginForm.identifyCode"></Sidentify>
            </div>
          </div>
          <div id="login_btn">
            <button id="submit" @click="loginCheck">登陆</button>
            <button id="reset" @click="reset">重置</button>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import Sidentify from '../components/Identify';
import Swal from 'sweetalert2';
import { 
  login
} from "../config/net";
import {
  SET_LOGINSTATUS
} from '../config/mutation-types';
import {
  mapMutations
} from 'vuex';

export default {
  name:'Login',
  data() {
    return {
      userkey:"",
      loginForm:{
        identifyCode:"",
        pictureCode: "",//输入input框的验证码
      },
    }
  },
  methods:{
    reset(){
      this.userkey="";
      this.loginForm.pictureCode="";
    },
    // 获取随机图片验证码
    refreshCode() {
      var numCode = "";
      for (var i = 0; i < 4; i++) {
        numCode += Math.floor(Math.random() * 10);
      }
      this.loginForm.identifyCode = numCode;
    },
    loginCheck(){
      if(this.loginForm.identifyCode!==this.loginForm.pictureCode){
        Swal.fire('验证码错误', 'Something went wrong!', 'error');
        this.refreshCode();
      }else{
        this.$axios({
          url:login,
          // withCredentials:true,
          method:'GET',
          params:{
            password:this.userkey
          }
        }).then(xhr=>{
          if(xhr.data===true){
            window.sessionStorage.setItem('loginStatus',true);
            this[SET_LOGINSTATUS]();
            this.$router.push('artical');
          }else{
            Swal.fire('密码错误', 'Something went wrong!', 'error');
          }
        }).catch(err=>{
          console.error(err);
        });
      }
    },
    ...mapMutations([
      SET_LOGINSTATUS
    ])
  },
  components:{
    Sidentify
  },
  mounted() {
    if(window.sessionStorage.getItem('loginStatus')){
      this.$router.push('artical');
    }
    this.refreshCode();
  },
}
</script>

<style scoped>
@media screen {  
  #login>main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  #login>main>div{
    margin-top: 30px;
    height: 80%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    background: rgba(190, 231, 233, 0.5);
    border-radius: 20px;
  }
  h1{
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #input{
    position: relative;
  }
  #user{
    background: none;
    outline: none;
    border: none;
    width: 80%;
    height: 37px;
    box-sizing: border-box;
    padding-left: 10px;
    background: rgba(190, 231, 233, 0.5);
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
  #check{
    display: flex;
    justify-content: center;
  }
  #check>input{
    background: none;
    outline: none;
    border: none;
    width: 30%;
    height: 37px;
    box-sizing: border-box;
    padding-left: 10px;
    background: rgba(190, 231, 233, 0.5);
    margin-right: 1em;
  }
  #login_btn>button{
    background: none;
    outline: none;
    border: none;
    width: 90px;
    height: 40px;
    border-radius: 45px;
    background: rgba(160, 238, 225, 0.8);
    color: white;
  }
  #login_btn{
    display: flex;
    justify-content: space-around;
  }
  .showLogin-enter{
    opacity: 0.3;
    transform: translateY(-20px);
  }
  .showLogin-enter-active{
    transition: all 1.2s;
  }
  .showLogin-enter-to{
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (min-width: 992px) {

  #login>main{
    width: 50%;
    height: 500px;
  }

  #login_btn>button:hover{
    background: rgba(190, 237, 199, 0.8);
    cursor: pointer;
    box-shadow: 0 2px gray;
    transform: translateY(-1px);
    transition: all 0.5s;
  }
}

@media  screen and (max-width: 991px) {
  #login>main{
    width: 80%;
    height: 400px;
  }
}
</style>