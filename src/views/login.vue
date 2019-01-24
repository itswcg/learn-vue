<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_container" v-show="showLogin">
        <div class="manage_tip">
          <p>learn-vue后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginFrom">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">未登录过的新用户，自动注册</p>
        <p class="tip">注册过的用户可凭账号密码登录</p>
      </section>
    </transition>
  </div>
</template>

<script>
// import { login } from '../api'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      },
      showLogin: false
    }
  },
  mounted () {
    //
  },
  computed: {
    //
  },
  methods: {
    //
  }
}
</script>

<style lang="less" scoped>
  @import "../style/mixin";

  .login_page {
    background: #3190e8;
  }
</style>
