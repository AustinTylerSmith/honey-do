<script setup lang="ts">
import type { Project } from '@/models/Project'
import '@/styling/projectCard.css'
import ProjectCards from "@/components/ProjectCards.vue";
import { type Ref, ref } from "vue";

let projects: Ref<Project[]> = ref([
  {
    title: 'Build Honey Do',
    nextAction: 'Open',
    tasks: [
      {
        description: 'My Task 1',
        finished: true
      },
      {
        description: 'My Task 2',
        finished: false
      },
      {
        description: 'My Task 3',
        finished: false
      }
    ],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    completed: false,
    communication: []
  },
  {
    title: 'Test Draggable',
    nextAction: 'Close',
    tasks: [
      {
        description: 'My Task 1',
        finished: true
      },
      {
        description: 'My Task 2',
        finished: true
      },
      {
        description: 'My Task 3',
        finished: false
      }
    ],
    blockers: [
      {
        description: 'blocked',
        timePassed: '3 hours and 20 minutes'
      }
    ],
    notes: 'note test note',
    completed: false,
    communication: []
  },
  {
    title: 'Test Again',
    nextAction: 'Re Open',
    tasks: [
      {
        description: 'My Task 1',
        finished: true
      },
      {
        description: 'My Task 2',
        finished: true
      },
      {
        description: 'My Task 3',
        finished: true
      }
    ],
    blockers: [
    ],
    notes: 'note test note',
    completed: true,
    communication: []
  }
])

</script>

<template>
  <ProjectCards :projects="projects"/>
</template>
<style scoped></style>
