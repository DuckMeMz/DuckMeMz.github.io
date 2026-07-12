<template>
  <div class="home-view">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Graduate Gameplay / Software Programmer</p>
        <h1 id="hero-title">
          I build gameplay systems, tools, and interactive applications.
        </h1>
        <p>
          I'm Dan Farnham, a First-Class Games Computing graduate focused on gameplay and software programming. I have paid Unreal Engine experience on the shipped title Samsara, alongside C++ and C# projects covering gameplay systems, real-world data, and interactive tools.
        </p>
        <div class="button-row">
          <RouterLink class="button button-primary" to="/project/samsara">
            View shipped gameplay work
          </RouterLink>
          <RouterLink class="button button-secondary" to="/resume/">
            View CV
          </RouterLink>
        </div>
      </div>

      <aside class="hero-panel" aria-label="Portfolio highlights">
        <img
          class="profile-image"
          src="/docs/assets/profile-image.png"
          alt="Daniel Farnham"
        />
        <dl class="highlight-list">
          <div>
            <dt>Industry experience</dt>
            <dd>Paid Unreal work on a shipped title</dd>
          </div>
          <div>
            <dt>Core strengths</dt>
            <dd>C++, C#, Unreal Engine, gameplay systems</dd>
          </div>
          <div>
            <dt>Current project</dt>
            <dd>PitWall — C# / WPF Formula 1 replay tool</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section
      v-for="group in projectGroups"
      :id="group.id"
      :key="group.id"
      class="project-group shell"
      :aria-labelledby="`${group.id}-heading`"
    >
      <div class="section-heading">
        <p class="eyebrow">{{ group.eyebrow }}</p>
        <h2 :id="`${group.id}-heading`">{{ group.title }}</h2>
        <p>{{ group.description }}</p>
      </div>

      <div :class="['project-grid', { 'project-grid-featured': group.slugs.length === 1 }]">
        <ProjectCard
          v-for="project in projectsForGroup(group)"
          :key="project.slug"
          :project="project"
        />
      </div>
    </section>

    <EducationSection class="shell" />
  </div>
</template>

<script setup>
import EducationSection from "@/components/EducationSection.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { projectGroups, projectsForGroup } from "@/data/projects";
</script>