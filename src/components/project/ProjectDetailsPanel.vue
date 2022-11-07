<template>
  <div class="d-flex flex-column gap-sm-2 gap-lg-4">
    <div v-for="(section, idx) in props.data" :key="idx">
      <h5 class="text-white">{{ section.title }}</h5>

      <p v-html="section.description" />

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
    data: ProjectDetails
  }>()
</script>

<style scoped></style>
