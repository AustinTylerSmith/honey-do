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
          <div class="card-section-1">
            <i class="move-card-icon pi pi-arrows-v handle smaller"></i>
            <router-link
              class="page-detail-link"
              :to="{ name: 'Project', params: { id: project.id } }"
            >
              <span class="project-card-title smaller">{{
                project.title
              }}</span>
            </router-link>
          </div>
          <div class="card-section-2">
            <button
              class="project-card-delete-btn pi pi-times-circle smaller"
            ></button>
          </div>
          <ProgressBar
            v-if="!(tasksCompleted(project.tasks) == 0)"
            class="honey-done-bar no-bar-needed"
            :value="tasksCompleted(project.tasks)"
          ></ProgressBar>
          <div
            v-if="tasksCompleted(project.tasks) == 0"
            class="empty-progress-bar no-bar-needed"
          >
            <span class="no-tasks-completed">No Tasks Completed</span>
          </div>
          <div class="card-section-3">
            <div v-tooltip.top="'Blocked: ' + project.blockers[0].timePassed">
              <i
                v-if="project.blockers.length > 0"
                class="project-card-blocker-icon pi pi-info-circle smaller"
              ></i>
            </div>
          </div>
          <div class="card-section-4">
            <button
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
        </div>
      </template>
    </draggableComponent>
    <router-link :to="{ name: 'Project', params: { id: projects.length + 1 } }">
      <button id="add-task-button">
        <i id="add-task-icon" class="pi pi-plus"></i>
      </button>
    </router-link>
    <div id="title-container">
      <span id="achievement-title" v-if="true">Achievements</span>
    </div>
    <div
      class="project-card completed-task"
      v-for="(project, index) in filterProjects(projects)"
      :key="index"
    >
      <div class="card-section-1">
        <router-link
          class="page-detail-link"
          :to="{ name: 'Project', params: { id: project.id } }"
        >
          <span class="project-card-title smaller">{{ project.title }}</span>
        </router-link>
        <button
          class="project-card-delete-btn pi pi-times-circle smaller"
        ></button>
      </div>
      <ProgressBar
        class="honey-done-bar no-bar-needed"
        :value="tasksCompleted(project.tasks)"
      ></ProgressBar>
      <div class="card-section-2">
        <button
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
    </div>
  </div>
</template>

<style scoped></style>
