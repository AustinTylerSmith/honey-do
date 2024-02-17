<script setup lang="ts">
import 'primeicons/primeicons.css'
import '@/styling/projectCard.css'
import type { Project } from '@/models/Project'
const props = defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="project-card">
    <i class="move-card-icon pi pi-arrows-v"></i>
    <div class="card-section-1">
      <span class="project-card-title">{{ props.project.title }}</span>
      <button class="project-card-delete-btn pi pi-times-circle"></button>
    </div>
    <div class="card-section-2">
      <i v-if="true" class="project-card-blocker-icon pi pi-info-circle"></i>
      <button class="project-card-action-btn">
        {{ props.project.nextAction }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
