<template>
  <div class="d-flex flex-column gap-sm-2 gap-lg-4">
    <div v-for="(section, idx) in props.data" :key="idx">
      <h5 class="text-white">{{ section.name }}</h5>

      <div class="d-flex gap-2 flex-wrap px-2">
        <button
          class="btn btn-light border-0"
          style="padding: 5px; cursor: default"
          v-for="icon in section.icons"
          :key="icon"
        >
          <img :src="require(`@/assets/icons/${icon}.svg`)" alt="" style="height: 32px" />
        </button>
      </div>

      <p class="my-2 px-2" v-html="section.description" />

      <div v-if="section.images.length > 0" class="my-3">
        <el-carousel
          class="project-details-carousel"
          :interval="10000"
          :arrow="section.images.length > 1 ? 'hover' : 'never'"
        >
          <el-carousel-item
            v-for="image in section.images"
            :key="image"
            class="text-center project-details-carousel-item"
          >
            <el-image :src="image" fit="fill" class="h-100" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    data: ProjectArchitecture
  }>()
</script>

<style scoped></style>
