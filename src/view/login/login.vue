<template>
  <div id="login">
    <el-input placeholder="请输入账户名" v-model="usename">
      <template slot="prepend">账号：</template>
    </el-input>
    <el-input placeholder="请输入密码" v-model="password">
      <template slot="prepend">密码：</template>
    </el-input>
    <el-button type="primary" @click="toHome">登录</el-button>
  </div>

</template>

<script>
  import {login,getUserByName} from '@/api/user'
  export default {
    name: 'Login',
    data(){
      return{
        usename: '',
        password: '',
      }
    },
    methods:{
      //点击登录按钮执行访问请求并判断是否登陆
      toHome(){

      }
    }
  }
</script>
<style>
.el-message{
  top: -100px;
}
#login{
  width: 100%;
  height: 100%;
  background-image: url("../../assets/login_bg.jpg");
  background-size: 100% 100%;

}
.container.login-fill-height{
  margin-top: 25%;
}
</style>
