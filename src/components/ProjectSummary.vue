<template>
  <section class="summary-panel" aria-labelledby="project-summary-heading">
    <div>
      <p class="eyebrow">{{ project.category }}</p>
      <h1 id="project-summary-heading">{{ project.title }}</h1>
      <p class="summary-subtitle">{{ project.subtitle }}</p>
      <p class="summary-copy">{{ project.summary }}</p>
    </div>

    <dl class="fact-grid" aria-label="Project facts">
      <div v-for="fact in project.facts" :key="fact.label" class="fact-item">
        <dt>{{ fact.label }}</dt>
        <dd>{{ fact.value }}</dd>
      </div>
    </dl>

    <div class="summary-meta">
      <div>
        <h2>Role</h2>
        <p>{{ project.role }}</p>
      </div>
      <div>
        <h2>Tools</h2>
        <ul class="tag-list">
          <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
      </div>
    </div>

    <div v-if="project.links.length" class="button-row" aria-label="Project links">
      <a
        v-for="link in project.links"
        :key="link.href"
        class="button button-secondary"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

