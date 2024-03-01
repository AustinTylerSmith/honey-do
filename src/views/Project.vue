<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import type { Project } from '@/models/Project'
import { getProjectById } from '@/service/projectService'
import { useRoute } from 'vue-router'
import Tasks from '@/components/Tasks.vue'
import Blockers from '@/components/Blockers.vue'
import Editor from 'primevue/editor'
import ProjectTitle from "@/components/ProjectTitle.vue";

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
    <div class="project-detail-component">
      <ProjectTitle :project="project"/>
    </div>
    <div class="my-tasks-and-blockers project-detail-component">
      <Tasks :tasks="project.tasks" id="project-tasks"></Tasks>
      <Blockers :blockers="project.blockers"></Blockers>
    </div>
    <div id="editor-container" class="flex flex-column justify-content-start project-detail-component">
      <span class="section-header">Notes</span>
      <Editor
        class="my-editor"
        v-model="project.notes"
        editorStyle="height: 320px"
      />
    </div>
  </div>
</template>
<style scoped></style>
