<template>
  <div class="h-100 d-flex flex-column gap-4">
    <h2 class="d-flex align-items-center text-white">
      <ion-icon name="git-merge-outline" /><span class="px-2">Work Experience</span>
    </h2>

    <ul class="timeline mx-3">
      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">Mar 2021 - Oct 2022</p>
          <h3 class="d-flex align-items-center flex-wrap">
            <el-avatar :size="48" :src="require('@/assets/logos/DocQ-Icon.svg')" style="background-color: white" />
            <span class="mx-2">DocQ (NDM Global)</span>
          </h3>

          <h4>Fullstack developer</h4>

          <p>
            <strong>DocQ - Process automation system</strong><br />
            Designed and implemented Process Automation system with scalable APIs that integrate with ATS, CRM, and
            HRIS, completed ADP, Salesforce and SmartRecruiter API integrations based on business requirements.
          </p>

          <p>
            <strong>DocQ Journey - Learning management system</strong><br />
            Led the design and development of Learning Management system within 5 months, from identifying system
            requirements and partner dependencies to workload balancing, software implementation, testing, and MVP
            delivery.
          </p>

          <p>
            <strong>DocQ Form Builder</strong><br />
            Designed and developed easy-to-use Form builder service that creates customizable, job-specific forms for
            unit needs, and provide data mapping functionality by an intuitive user interface to help businesses
            customize data migration from E2E.
          </p>

          <p>
            <strong>DocQ Dashboard - Learning management system</strong><br />
            Led the development of the company internal dashboard to support DocQ instance management, including
            notifications, monitors, health-check, configuration, and Identity & access management for over 15+
            enterprises.
          </p>
        </div>
      </li>

      <li class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">Sep 2019 - May 2020</p>
          <h3 class="d-flex align-items-center flex-wrap">
            <el-avatar :size="48" :src="require('@/assets/logos/kcc_logo.png')" style="background-color: white" />
            <span class="mx-2">Kapiolani community college</span>
          </h3>

          <h4>ICS peer mentor</h4>

          <p>
            Assist Professor to mentor Freshman/Sophomore students about OOP, Java, C, C++ , and Discrete math at
            Kapiolani Community College in Hawaii.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped></style>
