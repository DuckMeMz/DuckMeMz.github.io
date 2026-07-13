<template>
  <article class="project-card">
    <RouterLink
      class="project-card-media"
      :to="`/project/${project.slug}`"
      :aria-label="`View ${project.title} project`"
    >
      <MediaBlock :media="project.cardMedia" compact />
    </RouterLink>
    <div class="project-card-body">
      <p class="eyebrow">{{ project.category }}</p>
      <RouterLink class="project-title-link" :to="`/project/${project.slug}`">
        <h3>{{ project.title }}</h3>
      </RouterLink>
      <p class="project-card-subtitle">{{ project.subtitle }}</p>
      <p>{{ project.cardSummary }}</p>
      <ul class="tag-list" aria-label="Tools used">
        <li v-for="tool in project.tools.slice(0, 6)" :key="tool">{{ tool }}</li>
      </ul>
      <div class="card-actions">
        <RouterLink
          class="button button-small button-primary"
          :to="`/project/${project.slug}`"
        >
          View project
        </RouterLink>
        <RouterLink
          v-for="action in internalActions"
          :key="action.label"
          class="button button-small button-primary"
          :to="action.to"
        >
          {{ action.label }}
        </RouterLink>
        <a
          v-for="action in externalActions"
          :key="action.href"
          class="button button-small button-secondary"
          :href="action.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ action.label }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import MediaBlock from "@/components/MediaBlock.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const internalActions = computed(() =>
  (props.project.cardActions || []).filter((action) => action.to),
);
const externalActions = computed(() =>
  (props.project.cardActions || []).filter((action) => action.href),
);
</script>