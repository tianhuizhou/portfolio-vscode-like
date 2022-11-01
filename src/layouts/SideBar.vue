<template>
  <div class="sidebar d-flex">
    <div class="main-menu">
      <ul class="list-unstyled">
        <li class="cursor-pointer active" @click="SideMenu.sub_menu_state = !SideMenu.sub_menu_state">
          <ion-icon name="documents-outline" />
        </li>
      </ul>
    </div>

    <transition>
      <div class="sub-menu" v-if="!SideMenu.isCollapsed">
        <div class="d-flex align-items-center justify-content-between title">
          <span>EXPLORER</span>
        </div>

        <el-menu :default-active="cur_path" router :collapse="isCollapse" style="color: black">
          <el-sub-menu index="1">
            <template #title>
              <ion-icon name="folder" />
              <span class="fw-bold mx-2">About</span>
            </template>

            <el-menu-item
              v-for="item in menu_groups"
              :key="item.path"
              :index="item.path"
              :class="{ 'is-active': cur_path === item.path }"
              @click="selectMenuItem(item)"
            >
              <img :src="require(`@/assets/icons/${item.icon}.svg`)" alt="" style="height: 16px" />
              <span class="mx-2">{{ item.name }}</span>
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <ion-icon name="folder" />
              <span class="fw-bold mx-2">Project</span>
            </template>

            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { SideBarMenu } from '@/store/menu'
  const SideMenu = SideBarMenu.getInstance()
  const isCollapse = ref(false)

  const route = useRoute()
  const cur_path = computed(() => {
    return '/' + (route.path.split('/').filter((x) => x !== '')[0] || '')
  })

  const menu_groups = [
    { 'name': 'index.html', 'icon': 'html5-original', 'path': '/' },
    { 'name': 'work_experience.ts', 'icon': 'typescript-original', 'path': '/works' },
    { 'name': 'skills.js', 'icon': 'javascript-original', 'path': '/skills' },
    { 'name': 'education.css', 'icon': 'css3-original', 'path': '/education' },
    { 'name': 'project.yaml', 'icon': 'docker-original', 'path': '/projects' },
  ]

  const selectMenuItem = (item: { 'name': string; 'icon': string; 'path': string }) => {
    SideMenu.addTab = item
  }
</script>

<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
