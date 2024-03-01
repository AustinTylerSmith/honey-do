<script setup lang="ts">
import type { Blocker } from '@/models/Blocker'
import 'primeicons/primeicons.css'

const props = defineProps<{
  blockers?: Blocker[]
}>()
</script>

<template>
  <div class="list-with-header">
    <span class="section-header">Blockers</span>
    <div class="all-list-container">
      <div class="border-top"></div>
      <div
        class="list-container"
        v-for="(blocker, index) in props.blockers"
        :key="index"
      >
        <i
          class="blocker-icon pi pi-info-circle smaller"
        ></i>
        <input class="list-input" v-model="blocker.description" />
      </div>
    </div>
  </div>
</template>
