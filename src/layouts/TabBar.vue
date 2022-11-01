<template>
  <div class="app-tab-bar d-flex align-items-center">
    <div
      class="tab-box ps-3 pe-2 cursor-pointer"
      v-for="(tab, idx) in tab_list"
      :key="tab.name"
      :class="{ 'is-active': tab.path === cur_path }"
      @click="changeTab(tab.path)"
    >
      <img :src="require(`@/assets/icons/${tab.icon}.svg`)" alt="" style="height: 12px" />

      <span class="px-2 fw-bold" style="font-size: 13px; font-weight: 530">{{ tab.name }}</span>

      <span class="ms-1"><ion-icon name="close-outline" @click.stop="closeTab(idx)"></ion-icon></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { SideBarMenu } from '@/store/menu'
  const SideMenu = SideBarMenu.getInstance()

  const route = useRoute()
  const cur_path = computed(() => {
    return '/' + (route.path.split('/').filter((x) => x !== '')[0] || '')
  })

  const tab_list = SideMenu.selected_items

  const closeTab = (tab_idx: number) => {
    SideMenu.removeTab = tab_idx
  }
  const router = useRouter()
  const changeTab = (path: string) => {
    router.replace({ path: path as string })
  }
</script>

<style lang="scss"></style>
