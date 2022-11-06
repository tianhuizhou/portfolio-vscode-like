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

        <el-scrollbar style="height: 90%">
          <el-menu :default-active="cur_path" router :collapse="isCollapse" style="color: black" @select="hideMenu()">
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
                <span class="fw-bold mx-2">Blogs</span>
              </template>

              <el-menu-item index=""> <span class="mx-2">Coming soon</span></el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <ion-icon name="folder" />
                <span class="fw-bold mx-2">Projects</span>
              </template>

              <el-menu-item
                v-for="item in project_menu_groups"
                :key="item.path"
                :index="item.path"
                :class="{ 'is-active': cur_path === item.path }"
                @click="selectMenuItem(item)"
              >
                <img :src="require(`@/assets/icons/${item.icon}.svg`)" alt="" style="height: 16px" />
                <span class="mx-2">{{ item.name }}</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { SideBarMenu } from '@/store/menu'
  const SideMenu = SideBarMenu.getInstance()
  const isCollapse = ref(false)

  const route = useRoute()
  const cur_path = computed(() => {
    return route.path
    // return '/' + (route.path.split('/').filter((x) => x !== '')[0] || '')
  })

  const menu_groups = [
    { 'name': 'index.html', 'icon': 'html5-original', 'path': '/' },
    { 'name': 'work_experience.ts', 'icon': 'typescript-original', 'path': '/works' },
    { 'name': 'skills.js', 'icon': 'javascript-original', 'path': '/skills' },
    { 'name': 'education.css', 'icon': 'css3-original', 'path': '/education' },
    { 'name': 'projects.py', 'icon': 'python-original', 'path': '/projects' },
    { 'name': 'resume.vue', 'icon': 'vuejs-original', 'path': '/resume' },
  ]

  const project_menu_groups = [{ 'name': 'what_todo.yaml', 'icon': 'docker-original', 'path': '/projects/what_todo' }]

  const selectMenuItem = (item: { 'name': string; 'icon': string; 'path': string }) => {
    SideMenu.addTab = item
  }
  function hideMenu() {
    const windowWidth = window.innerWidth
    if (windowWidth <= 798) {
      // small window
      SideMenu.sub_menu_state = false
    }
  }
  onMounted(() => {
    // redirect view by url
    if (cur_path.value !== '/') {
      const tab = [...menu_groups, ...project_menu_groups].find((item) => item.path === cur_path.value) ?? null
      if (tab) SideMenu.addTab = tab
    }
    window.addEventListener('resize', hideMenu)
    hideMenu()
  })
  onUnmounted(() => {
    window.removeEventListener('resize', hideMenu)
  })
</script>

<style lang="scss">
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
