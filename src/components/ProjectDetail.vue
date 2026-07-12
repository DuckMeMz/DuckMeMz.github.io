<template>
  <article class="project-detail">
    <RouterLink class="back-link" to="/">Back to portfolio</RouterLink>
    <ProjectSummary :project="project" />

    <MediaBlock
      v-if="project.detailMedia"
      :media="project.detailMedia"
      class="project-hero-media"
    />

    <MediaCarousel v-if="project.carousel" :items="project.carousel" />

    <section
      v-for="section in project.sections"
      :key="section.title"
      class="content-section project-section"
    >
      <div>
        <h2>{{ section.title }}</h2>
        <ul v-if="section.type === 'bullets'" class="contribution-list">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
        <p v-else v-for="paragraph in section.body" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
      <MediaBlock
        v-if="section.media"
        :media="section.media"
        :caption="section.media.label"
      />
    </section>
  </article>
</template>

<script setup>
import MediaBlock from "@/components/MediaBlock.vue";
import MediaCarousel from "@/components/MediaCarousel.vue";
import ProjectSummary from "@/components/ProjectSummary.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
