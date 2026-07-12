<template>
  <figure :class="['media-block', { 'media-block-compact': compact }]">
    <video
      v-if="media.type === 'video'"
      :src="media.src"
      :poster="media.poster"
      muted
      loop
      playsinline
      autoplay
      preload="metadata"
      :aria-label="media.label"
    />
    <img
      v-else-if="media.type === 'image'"
      :src="media.src"
      :alt="media.label"
      loading="lazy"
    />
    <iframe
      v-else-if="media.type === 'youtube'"
      :src="media.src"
      :title="media.label"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <div v-else-if="media.type === 'panel'" class="media-panel" :aria-label="media.label">
      <span>{{ media.kicker }}</span>
      <strong>{{ media.title }}</strong>
      <small>{{ media.meta }}</small>
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  media: {
    type: Object,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>