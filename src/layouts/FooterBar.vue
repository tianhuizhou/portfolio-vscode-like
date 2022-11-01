<template>
  <footer class="d-flex justify-content-between align-items-center">
    <div class="footer-left d-flex gap-2 mx-2">
      <span class="fw-bold">Made in </span>
      <span class="fw-bold">Vue.js</span>
      <span class="fw-bold">TypeScript</span>
    </div>
    <div class="footer-right d-flex gap-2 mx-2">
      <span class="fw-bold">{{ cur_time }}</span>
      <span class="fw-bold">@Developer: Tianhui Zhou</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue'

  let cur_time = ref('')
  let time_interval: number | null = null
  onMounted(() => {
    time_interval = setInterval(() => {
      cur_time.value = new Date().toLocaleString('en-US')
    }, 1000)
  })
  onUnmounted(() => {
    if (time_interval !== null) clearInterval(time_interval)
  })
</script>

<style lang="scss"></style>
