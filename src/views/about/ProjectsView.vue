<template>
  <div class="h-100 d-flex flex-column gap-4">
    <h2 class="d-flex align-items-center text-white">
      <ion-icon name="bulb-outline" />
      <span class="px-2">Projects <kbd class="fs-5">(Project details page is coming soon)</kbd></span>
    </h2>

    <div class="w-75 text-white fw-bold">Side projects that are built for fun</div>

    <div class="d-flex align-items-center justify-content-start gap-5 flex-wrap">
      <div
        class="project-card"
        v-for="project in project_list"
        :key="project.path"
        @click="redirectToProjectDetails(project.path)"
      >
        <div class="card align-items-center justify-content-center" style="height: 65%">
          <el-image :src="require(`@/assets/${project.cover}`)" fit="cover" />
        </div>

        <div class="row align-items-center py-3">
          <div class="col-2">
            <el-avatar :src="require(`@/assets/${project.avatar}`)" :size="48" />
          </div>
          <div class="col">
            <h5 class="fw-bold text-white">{{ project.name }}</h5>
            <p>{{ project.intro }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { getAllProjects } from '@/utils/project_data'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const project_list = ref<Project[]>(getAllProjects())

  const router = useRouter()
  const redirectToProjectDetails = (path: string) => {
    router.replace({ path: `projects/${path}` as string })
  }
</script>

<style lang="scss">
  .project-card {
    width: 420px;
    height: 300px;
    transition: all 0.5s ease;
    border-radius: 10px;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);
    overflow: hidden;
  }
  .project-card:hover {
    transform: translate3D(0, -1px, 0) scale(1.03); /* move up slightly and zoom in */
    box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07), 1px 6px 12px rgba(39, 44, 49, 0.04);
    transition: all 0.4s ease; /* zoom in */
    cursor: pointer;
  }
</style>
