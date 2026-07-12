<template>
  <SiteHeader />
  <main id="main-content">
    <RouterView />
  </main>
  <footer class="site-footer">
    <p>Daniel Farnham - Gameplay programmer with experience in gameplay systems, real-world data and interactive tools.</p>
  </footer>
</template>

<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
</script>

