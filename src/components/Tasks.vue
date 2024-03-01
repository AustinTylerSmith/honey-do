<script setup lang="ts">
import type { Task } from '@/models/Task.js'

import Checkbox from 'primevue/checkbox'

const props = defineProps<{
  tasks?: Task[]
}>()
</script>

<template>
  <div class="list-with-header">
    <span class="section-header">Tasks</span>
    <div class="all-list-container">
      <div class="border-top"></div>
      <div
        class="list-container"
        v-for="(task, index) in props.tasks"
        :key="index"
      >
        <Checkbox class="task-checkbox" v-model="task.finished" />
        <input class="list-input" v-model="task.description" />
      </div>
    </div>
  </div>
</template>
