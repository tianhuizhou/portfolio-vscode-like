<template>
  <nav class="navbar fixed-top px-2">
    <div class="navbar-left d-flex align-items-center gap-2">
      <span class="pill-color-btn bg-danger rounded" />
      <span class="pill-color-btn bg-warning rounded" />
      <span class="pill-color-btn bg-success rounded" />
    </div>

    <div class="navbar-title float-start fw-bold">
      <img src="@/assets/icons/dev-man.webp" height="16" alt="Dev Man" />
      <span class="px-2">Bobby is SDE - {{ cur_route_name }}</span>
    </div>

    <div class="navbar-right"></div>
  </nav>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'

  const route = useRoute()
  const cur_route_name = computed(() => {
    return route.name
  })
</script>

<style lang="scss"></style>
