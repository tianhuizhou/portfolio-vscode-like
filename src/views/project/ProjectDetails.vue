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

        <div class="my-3">{{ project.intro }}</div>

        <div class="d-flex align-items-center gap-3">
          <button class="btn btn-outline-light d-flex align-items-center p-1" @click="openWebsite(project.url)">
            <ion-icon name="play-circle-outline" size="small" />
          </button>

          <button class="btn btn-outline-light d-flex align-items-center p-1" @click="openWebsite(project.github)">
            <img src="@/assets/icons/git-original.svg" alt="gmail" height="18" width="18" />
          </button>
        </div>
      </div>
    </div>

    <el-tabs v-model="cur_tab" class="w-100 px-0 px-sm-1 px-lg-5">
      <el-tab-pane label="Details" name="Details">
        <ProjectDetailsPanel :data="project.details" />
      </el-tab-pane>

      <el-tab-pane label="Architecture" name="Architecture">
        <ProjectArchitecturePanel :data="project.architecture" />
      </el-tab-pane>

      <el-tab-pane label="Changelog" name="Changelog"> <ProjectChangelogPanel /> </el-tab-pane>
      <!--      <el-tab-pane label="Comments" name="Comments">Coming soon</el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
  import ProjectDetailsPanel from '@/components/project/ProjectDetailsPanel.vue'
  import ProjectArchitecturePanel from '@/components/project/ProjectArchitecturePanel.vue'
  import ProjectChangelogPanel from '@/components/project/ProjectChangelogPanel.vue'
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { getProjectByName } from '@/utils/project_data'

  const route = useRoute()
  const project_name = computed<string>(() => {
    return (route.params.id ?? '/') as string
  })

  const project = computed(() => {
    return getProjectByName(project_name.value)
  })

  function openWebsite(url: string) {
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  /* Tab View */
  const cur_tab = ref<string>('Details')
</script>

<style scoped></style>
