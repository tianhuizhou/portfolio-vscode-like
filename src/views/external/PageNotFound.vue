<template>
  <div>
    <div
      class="d-flex flex-column align-items-center justify-content-center lh-1 text-gray-300"
      style="min-height: 70vh"
    >
      <div class="text-center">
        <span class="font-monospace d-block fw-bold" style="font-size: 10rem">404</span>
        <span class="d-block">Page not found</span>
      </div>

      <div class="my-5 text-center w-50">
        <router-link class="" to="/"><el-link type="primary" :underline="false">Home page</el-link></router-link>
      </div>
    </div>
  </div>
</template>
