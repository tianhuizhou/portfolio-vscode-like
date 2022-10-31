<template>
  <div class="sidebar d-flex">
    <div class="main-menu">
      <ul class="list-unstyled">
        <li class="cursor-pointer active">
          <ion-icon name="documents-outline" />
        </li>
      </ul>
    </div>

    <div class="sub-menu">
      <div class="d-flex align-items-center justify-content-between title">
        <span>EXPLORER</span>
      </div>

      <el-menu default-active="2" :collapse="isCollapse" @open="handleOpen" @close="handleClose" style="color: black">
        <el-sub-menu index="1">
          <template #title>
            <span class="fw-bold">About</span>
          </template>

          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <span class="fw-bold">Project</span>
          </template>

          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const isCollapse = ref(false)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    padding-top: 35px;
    z-index: 4;

    .main-menu {
      width: 50px;
      height: calc(100% - #{24px});
      background-color: #333333;

      ul li {
        position: relative;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        ion-icon {
          --ionicon-stroke-width: 16px;
          font-size: 30px;
        }

        &:hover,
        &:focus {
          color: white;
        }

        &.active {
          color: white;
        }

        &.active:after {
          content: ' ';
          background: white;
          // border-radius: 10px;
          position: absolute;
          width: 2px;
          height: 100%;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
        }
      }
    }

    .sub-menu {
      height: calc(100% - #{24px});
      width: 280px;
      color: #cccccc;
      background-color: #252526;

      .title {
        font-size: 12px;
        margin: 10px 20px;
        span {
          font-weight: 600;
        }
      }
    }
  }
</style>
