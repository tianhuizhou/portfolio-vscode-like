<template>
  <div id="app-container">
    <TopNav />
    <SideBar />
    <main>
      <div class="container-fluid" style="max-width: 2022px">
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
</script>

<style scoped></style>
