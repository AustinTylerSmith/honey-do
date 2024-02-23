<script setup lang="ts">
import type { Project } from '@/models/Project'
import '@/styling/projectCard.css'
import ProjectCards from '@/components/ProjectCards.vue'
import { retrieveProjectsForUser } from '@/service/projectService'
import { ref, type Ref } from "vue";

let projects: Ref<Project[]> = ref(retrieveProjectsForUser())

</script>

<template>
  <ProjectCards :projects="projects" />
</template>
<style scoped></style>
