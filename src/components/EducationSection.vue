<template>
  <section class="content-section education-section" aria-labelledby="education-heading">
    <div class="section-heading">
      <p class="eyebrow">Education</p>
      <h2 id="education-heading">First-Class Games Computing graduate</h2>
      <p>
        Degree-level games programming with additional software, AR, and client-facing project experience.
      </p>
    </div>

    <div class="education-grid">
      <article v-for="item in education" :key="item.institution" class="education-card">
        <p class="eyebrow">{{ item.dates }}</p>
        <h3>{{ item.institution }}</h3>
        <p>{{ item.award }}</p>
        <details>
          <summary>Highlights</summary>
          <ul>
            <li v-for="highlight in item.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </details>
        <a
          class="text-link"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View course
        </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import { education } from "@/data/education";
</script>