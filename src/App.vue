<script setup lang="ts">
import Header from "@/components/Header.vue";
import '@/styling/main.css'
import '@/styling/projectDetails.css'
import '@/styling/projectCard.css'
import 'primeflex/primeflex.css'
</script>

<template>
  <Header></Header>
  <section class="content-container">
    <router-view />
  </section>
</template>

