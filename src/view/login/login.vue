<template>
  <div id="login">
    <el-input placeholder="请输入账户名" v-model="usename">
      <template slot="prepend">账号：</template>
    </el-input>
    <el-input placeholder="请输入密码" v-model="password">
      <template slot="prepend">密码：</template>
    </el-input>
    <el-button type="primary" @click="login">Login</el-button>
    <el-button type="primary" @click="toRegister">Register</el-button>
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
      toRegister: function () {
        this.$router.push("/register")
      },
      login: function () {
        if(this.usename=='' || this.password==''){
          this.$toasted.show("登录失败，信息填写不完整", {
            theme: "outline",
            position: "top-center",
            duration : 3000
          })
        }else{
          login(this.loginParam).then((response) => {
            if(response.data.code==200){
              this.$toasted.show("登录成功", {
                type: "success",
                position: "top-center",
                duration : 2000
              })
              var token=response.data.data
              this.$store.commit('setToken', token);
              getUserByName(response.data.username).then(r =>{
                if(r.data.code==200){
                  localStorage.setItem("user",JSON.stringify(r.data.data))
                  localStorage.setItem("show",true)
                  this.$router.push({
                    path: "/habit",
                    query: {
                      show: true
                    }
                  })
                }
              })

            }else{
              this.$toasted.show(response.data.message, {
                type: "error",
                position: "top-center",
                duration : 3000
              })
            }
          }, (error) => {
            this.$toasted.show("登录失败", {
              type: "error",
              position: "top-center",
              duration : 2000
            })
          })
        }

      }
    },
    props: {
      source: String
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
