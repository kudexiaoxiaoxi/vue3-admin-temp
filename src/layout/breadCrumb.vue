<template>
  <el-breadcrumb separator="/" class="web-site-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
  </el-breadcrumb>
</template>


<style lang="scss" scoped>
.web-site-breadcrumb{
  height: 60px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  .el-breadcrumb__item{
    font-size: 18px;
  }
}
</style>