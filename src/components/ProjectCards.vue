<script setup lang="ts">
import 'primeicons/primeicons.css'
import '@/styling/projectCard.css'
import type { Project } from '@/models/Project'
import draggableComponent from 'vuedraggable'
import type { Task } from '@/models/Task'
import ProgressBar from 'primevue/progressbar'

const props = defineProps<{
  projects: Project[]
}>()

function tasksCompleted(tasks: Task[]): number {
  let value = 0
  let incrementBy: number = 100 / tasks.length
  tasks.forEach((task) => {
    if (task.finished) {
      value += incrementBy
    }
  })
  return Math.round(value)
}

function filterProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.completed)
}
</script>

<template>
  <div id="project-cards-container">
    <draggableComponent
      :list="props.projects"
      item-key="title"
      handle=".handle"
    >
      <template #item="{ element: project }">
        <div class="project-card" v-if="!project.completed">
          <i class="move-card-icon pi pi-arrows-v handle"></i>
          <div class="card-section-1">
            <span class="project-card-title">{{ project.title }}</span>
            <button class="project-card-delete-btn pi pi-times-circle"></button>
          </div>
          <ProgressBar
            class="honey-done-bar"
            :value="tasksCompleted(project.tasks)"
          ></ProgressBar>
          <div class="card-section-2">
            <div v-tooltip.top="'Blocked: ' + project.blockers[0].timePassed">
            <i
              v-if="project.blockers.length > 0"
              class="project-card-blocker-icon pi pi-info-circle"
            ></i>
            </div>
            <button
              :class="
                project.nextAction == 'Open'
                  ? 'open-color project-card-action-btn'
                  : project.nextAction == 'Close'
                    ? 'close-color project-card-action-btn'
                    : 're-open-color project-card-action-btn'
              "
            >
              {{ project.nextAction }}
            </button>
          </div>
        </div>
      </template>
    </draggableComponent>
    <button id="add-task-button">
      <i id="add-task-icon" class="pi pi-plus"></i>
    </button>
    <div id="title-container">
      <span id="achievement-title" v-if="true">Achievements</span>
    </div>
    <div
      class="project-card completed-task"
      v-for="(project, index) in filterProjects(projects)"
      :key="index"
    >
      <div class="card-section-1">
        <span class="project-card-title">{{ project.title }}</span>
        <button class="project-card-delete-btn pi pi-times-circle"></button>
      </div>
      <ProgressBar
        class="honey-done-bar"
        :value="tasksCompleted(project.tasks)"
      ></ProgressBar>
      <div class="card-section-2">
        <button
          :class="
            project.nextAction == 'Open'
              ? 'open-color project-card-action-btn'
              : project.nextAction == 'Close'
                ? 'close-color project-card-action-btn'
                : 're-open-color project-card-action-btn'
          "
        >
          {{ project.nextAction }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
