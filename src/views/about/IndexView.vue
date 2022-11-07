<template>
  <div class="d-flex flex-column justify-content-center align-items-center gap-4" style="height: 90vh">
    <img src="@/assets/Tianhui-Zhou.svg" alt="" style="height: 70px" />

    <div class="text-animation-wrapper">
      <!--      <div class="static-txt">I'm a</div>-->
      <ul class="dynamic-txts">
        <li class="text-center"><span>I'm a { Software Engineer }, </span></li>
        <li class="text-center"><span>{ Fullstack Developer }, </span></li>
        <li class="text-center"><span>{ Team Player },</span></li>
        <li class="text-center"><span>{ Self-starter }.</span></li>
      </ul>
    </div>

    <div class="d-flex align-items-center gap-3">
      <el-tooltip class="box-item" effect="light" content="Github" placement="top-start" :show-after="400">
        <button class="btn btn-outline-light d-flex align-items-center p-1" @click="openWebsite('github')">
          <ion-icon name="logo-github" size="large" />
        </button>
      </el-tooltip>

      <el-tooltip content="Linkedin" effect="light" placement="top-start" :show-after="400">
        <button class="btn btn-outline-light d-flex align-items-center p-1" @click="openWebsite('linkedin')">
          <ion-icon name="logo-linkedin" size="large" style="color: #0076b2" />
        </button>
      </el-tooltip>

      <el-tooltip content="Gmail" effect="light" placement="top-start" :show-after="400">
        <button class="btn btn-outline-light d-flex align-items-center p-1" @click="openWebsite('gmail')">
          <img src="@/assets/icons/gmail-original.svg" alt="gmail" height="32" width="32" />
        </button>
      </el-tooltip>

      <el-tooltip content="Resume" effect="light" placement="top-start" :show-after="400">
        <button class="btn btn-outline-light d-flex align-items-center p-1" @click="openWebsite('resume')">
          <ion-icon name="document-attach-outline" size="large" />
        </button>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
  function openWebsite(type: string) {
    const a = document.createElement('a')
    switch (type) {
      case 'github':
        a.href = 'https://github.com/tianhuizhou'
        a.target = '_blank'
        break
      case 'linkedin':
        a.href = 'https://www.linkedin.com/in/tianhui-zhou-55148619b/'
        a.target = '_blank'
        break
      case 'gmail':
        a.href = 'mailto:tianhuizhou567@gmail.com'
        break
      case 'resume':
        a.href = 'https://drive.google.com/file/d/1xYBCEWRcb5yxxCwidfupbZxjiC2_xQJC/view?usp=sharing'
        a.target = '_blank'
        break
      default:
        console.log('Invalid option')
        return
    }
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
</script>

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
