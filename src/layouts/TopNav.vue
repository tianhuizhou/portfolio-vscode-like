<template>
  <nav class="navbar fixed-top px-2">
    <div class="navbar-left d-flex align-items-center gap-2">
      <span class="pill-color-btn bg-danger rounded" />
      <span class="pill-color-btn bg-warning rounded" />
      <span class="pill-color-btn bg-success rounded" />
    </div>

    <div class="navbar-title float-start fw-bold">BobTech</div>

    <div class="navbar-right"></div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  nav {
    background-color: #3c3c3c;
    height: 35px;
    color: white;

    .pill-color-btn {
      width: 13px;
      height: 13px;
    }

    .navbar-title {
      flex-basis: 20%;
      text-align: center;
      font-size: 14px;
    }
    .navbar-left {
      flex-basis: 40%;
    }
    .navbar-right {
      flex-basis: 40%;
      text-align: right;
    }
  }
</style>
