<template>
  <section class="media-carousel" aria-label="Project video carousel">
    <div class="carousel-heading">
      <div>
        <p class="eyebrow">Demo reel</p>
        <h2>{{ currentItem.title }}</h2>
      </div>
      <div class="carousel-controls">
        <button type="button" class="icon-button" @click="previous" aria-label="Previous demo">
          <span aria-hidden="true">&lt;</span>
        </button>
        <button type="button" class="icon-button" @click="next" aria-label="Next demo">
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>
    </div>
    <MediaBlock :media="currentItem" />
    <p class="carousel-count" aria-live="polite">
      {{ currentIndex + 1 }} / {{ items.length }}
    </p>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import MediaBlock from "@/components/MediaBlock.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const currentItem = computed(() => props.items[currentIndex.value]);

function previous() {
  currentIndex.value =
    currentIndex.value === 0 ? props.items.length - 1 : currentIndex.value - 1;
}

function next() {
  currentIndex.value =
    currentIndex.value === props.items.length - 1 ? 0 : currentIndex.value + 1;
}
</script>

