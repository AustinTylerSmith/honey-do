<script setup lang="ts">
import type { Project } from "@/models/Project";

defineModel<Project>('project', {required: true});

</script>
<template>
  <span class="section-header">Title</span>
  <div id="title-action-container">
    <input class="detail-title-input" v-model="project.title" />
    <button
      id="project-action-button"
      :class="
          project.nextAction == 'Open'
            ? 'open-color project-card-action-btn smaller'
            : project.nextAction == 'Close'
              ? 'close-color project-card-action-btn smaller'
              : 're-open-color project-card-action-btn smaller'
        "
    >
      {{ project.nextAction }}
    </button>
  </div>
</template>
