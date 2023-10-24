<template>
  <div id="login">
    <div class="login-container">
      <el-input placeholder="..." v-model="usename">
        <template slot="prepend">Account：</template>
      </el-input>
      <el-input placeholder="..." v-model="password">
        <template slot="prepend">Password：</template>
      </el-input>
      <div class="button-group">
        <el-button type="primary" @click="login">Login</el-button>
        <el-button type="text" @click="toRegister">Register</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '@/api/login'
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
      toRegister: function () {
        this.$router.push("/register")
      },
      login: function(){
        this.$router.push("/schedule")
      }
      // login: function () {
      //   if(this.usename=='' || this.password==''){
      //     this.$toasted.show("登录失败，信息填写不完整", {
      //       theme: "outline",
      //       position: "top-center",
      //       duration : 3000
      //     })
      //   }else{
      //     login(this.loginParam).then((response) => {
      //       if(response.data.code==200){
      //         this.$toasted.show("登录成功", {
      //           type: "success",
      //           position: "top-center",
      //           duration : 2000
      //         })
      //         var token=response.data.data
      //         this.$store.commit('setToken', token);
      //         getUserByName(response.data.username).then(r =>{
      //           if(r.data.code==200){
      //             localStorage.setItem("user",JSON.stringify(r.data.data))
      //             localStorage.setItem("show",true)
      //             this.$router.push({
      //               path: "/habit",
      //               query: {
      //                 show: true
      //               }
      //             })
      //           }
      //         })

      //       }else{
      //         this.$toasted.show(response.data.message, {
      //           type: "error",
      //           position: "top-center",
      //           duration : 3000
      //         })
      //       }
      //     }, (error) => {
      //       this.$toasted.show("登录失败", {
      //         type: "error",
      //         position: "top-center",
      //         duration : 2000
      //       })
      //     })
      //   }

      // }
    },
    props: {
      source: String
    }

  }
</script>

<style>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/login_bg.jpg");
  background-size: cover;
  background-position: center;
}

.login-container {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.login-container .el-input {
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>
