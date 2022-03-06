<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    default-active="2"
    class="el-menu-self"
    @open="handleOpen"
    @close="handleClose"
  >
    <h3 class="web-sit-title">admin</h3>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        我是主菜单
      </template>
      <el-menu-item index="1-4-1">次级选择菜单111</el-menu-item>
      <el-menu-item index="1-4-2">次级选择菜单222</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import {
    Location,
    Document,
    Menu as IconMenu,
    Setting
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>


<style lang="scss">
  .el-menu-self{
    height:100%;
  }
  .web-sit-title{
    /* border-right: solid 1px var(--el-menu-border-color); */
    margin: 0;
    height: 60px;
    background: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }

</style>
