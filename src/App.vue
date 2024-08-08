<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <el-button type="primary" disabled>主要按钮</el-button>
  </div>
</template>

<script>

import { getPage } from '@/api/user'
import { Message } from 'element-ui'

export default {
  name: 'App',
  data () {},
  methods: {
    init () {
      getPage({name: '', gender: 0, pageCurrent: 1, pageSize: 10})
        .then((res) => {
          const { data } = res
          console.log(data)
        })
        .catch((e) => {
          Message({
            message: e.message || '服务器错误',
            type: 'error',
            duration: 5 * 1000
          })
        })
    }
  },
  created () {
    // this.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
