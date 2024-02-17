<script setup lang="ts">
import type { Project } from '@/models/Project'
import '@/styling/projectCard.css'
import draggableComponent from 'vuedraggable'
import ProjectCard from "@/components/ProjectCard.vue";

let projects: Project[] = [
  {
    title: 'Build Honey Do',
    nextAction: 'Open',
    tasks: [],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    communication: []
  },
  {
    title: 'Test Draggable',
    nextAction: 'Open',
    tasks: [],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    communication: []
  },
  {
    title: 'Test Again',
    nextAction: 'Open',
    tasks: [],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    communication: []
  }
]
</script>

<template>
  <draggableComponent v-model="projects" tag="ul">
    <template #item="{ element: project }">
      <div>
        <li class="card-container">
          <ProjectCard :project="project"/>
        </li>
      </div>
    </template>
  </draggableComponent>
</template>
<style scoped></style>
