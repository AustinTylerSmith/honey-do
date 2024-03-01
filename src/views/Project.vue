<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import type { Project } from '@/models/Project'
import { getProjectById } from '@/service/projectService'
import { useRoute } from 'vue-router'
import Tasks from '@/components/Tasks.vue'
import Blockers from '@/components/Blockers.vue'

let project: Ref<Project> = ref({
  id: Number(useRoute().params.id),
  title: '',
  nextAction: '',
  tasks: [],
  blockers: [],
  notes: '',
  completed: false,
  communication: []
})

onMounted(() => {
  let existingProject = getProjectById(Number(useRoute().params.id))
  if (existingProject !== null) {
    project.value = existingProject
  }
})
</script>

<template>
  <div class="project-details-container">
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
    <div class="my-tasks-and-blockers">
      <Tasks :tasks="project.tasks" id="project-tasks"></Tasks>
      <Blockers :blockers="project.blockers"></Blockers>
    </div>
  </div>
</template>
<style scoped></style>
