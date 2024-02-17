<script setup lang="ts">
import Header from "@/components/Header.vue";
import '@/styling/main.css'
</script>

<template>
  <Header></Header>
  <section class="content-container">
    <router-view />
  </section>
</template>

