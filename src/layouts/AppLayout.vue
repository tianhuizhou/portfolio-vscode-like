<template>
  <div id="app-container">
    <TopNav />
    <SideBar />
    <TabBar />
    <main>
      <div class="container-fluid h-100 main-content-wrapper">
        <slot></slot>
      </div>
    </main>
    <FooterBar />
  </div>
</template>

<script lang="ts" setup>
  import TopNav from './TopNav'
  import SideBar from './SideBar'
  import FooterBar from './FooterBar.vue'
  import TabBar from './TabBar.vue'
</script>

<style scoped></style>
