<template>
  <div class="shell view-shell">
    <ProjectDetail v-if="project" :project="project" />
    <section v-else class="content-section">
      <p class="eyebrow">Project missing</p>
      <h1>That project is not available.</h1>
      <RouterLink class="button button-primary" to="/">Back to portfolio</RouterLink>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import ProjectDetail from "@/components/ProjectDetail.vue";
import { findProject } from "@/data/projects";

const route = useRoute();
const project = computed(() => findProject(route.params.slug));
</script>

