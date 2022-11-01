<template>
  <div class="h-100 d-flex flex-column justify-content-center align-items-center gap-4">
    <img src="@/assets/Tianhui-Zhou.svg" alt="" style="height: 70px" />

    <div class="text-animation-wrapper">
      <!--      <div class="static-txt">I'm a</div>-->
      <ul class="dynamic-txts">
        <li class="text-center"><span>I'm a { Software Engineer }, </span></li>
        <li class="text-center"><span>{ Fullstack Developer }, </span></li>
        <li class="text-center"><span>{ Team Player },</span></li>
        <li class="text-center"><span>{ Designer }.</span></li>
      </ul>
    </div>

    <div class="d-flex align-items-center gap-3">
      <button class="btn btn-outline-light d-flex align-items-center p-1">
        <ion-icon name="logo-github" size="large"></ion-icon>
      </button>
      <button class="btn btn-outline-light d-flex align-items-center p-1">
        <ion-icon name="logo-linkedin" size="large" style="color: #0076b2"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  .text-animation-wrapper {
    display: flex;
    ul {
      padding: 0;
    }
  }
  .text-animation-wrapper .static-txt {
    color: #fff;
    font-size: 60px;
    font-weight: 400;
  }
  .text-animation-wrapper .dynamic-txts {
    margin-left: 15px;
    height: 90px;
    line-height: 90px;
    overflow: hidden;
  }
  .dynamic-txts li {
    list-style: none;
    color: #fc6d6d;
    font-size: 60px;
    font-weight: 500;
    position: relative;
    top: 0;
    animation: slide 12s steps(4) infinite;
  }
  @keyframes slide {
    100% {
      top: -360px;
    }
  }
  .dynamic-txts li span {
    position: relative;
    margin: 5px 0;
    line-height: 90px;
  }
  .dynamic-txts li span::after {
    content: '';
    position: absolute;
    left: 0;
    margin-top: 15px;
    height: 100%;
    width: 100%;
    background: #1e1e1e;
    border-left: 2px solid #fc6d6d;
    animation: typing 3s steps(10) infinite;
  }
  @keyframes typing {
    40%,
    60% {
      left: calc(100% + 30px);
    }
    100% {
      left: 0;
    }
  }
</style>
