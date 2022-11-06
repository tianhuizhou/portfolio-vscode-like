<template>
  <div class="d-flex flex-column align-items-center">
    <div class="row w-100 px-0 px-sm-1 px-lg-5">
      <div class="col-auto px-0">
        <el-avatar
          :src="require(`@/assets/${project.avatar}`)"
          :size="120"
          shape="square"
          fit="cover"
          style="background: none"
        />
      </div>
      <div class="col">
        <div class="d-flex align-items-center gap-3">
          <span class="h3 mb-0 fw-bold">{{ project.name }}</span>
          <el-tag>v {{ project.version }}</el-tag>
        </div>

        <div class="my-2">{{ project.intro }}</div>

        <div>
          <el-button type="success" size=""><span class="fw-semibold">Try it</span></el-button>
        </div>
      </div>
    </div>

    <div>Body</div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { getProjectByName } from '@/utils/project_data'

  const route = useRoute()
  const project_name = computed<string>(() => {
    return (route.params.id ?? '/') as string
  })

  const project = computed(() => {
    return getProjectByName(project_name.value)
  })
</script>

<style scoped></style>
