

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
         <div class="header-wapper"> <el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        </el-header>
        <bread-crumb></bread-crumb>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from "./layout/menu.vue";
import breadCrumb from "./layout/breadCrumb.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  /* margin-top: 60px; */
  .el-header{
    padding: 0;
  }
  .el-container{
    height: 100%;
  }
  .header-wapper{
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;
    height: 100%;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>
