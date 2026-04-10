<script setup lang="ts">
import FinalMessageSection from './components/sections/FinalMessageSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import MemoryTimeline from './components/sections/MemoryTimeline.vue';
import PhotoGallery from './components/sections/PhotoGallery.vue';
import ReasonsSection from './components/sections/ReasonsSection.vue';
import StorySection from './components/sections/StorySection.vue';
import FloatingParticles from './components/ui/FloatingParticles.vue';
import MusicBadge from './components/ui/MusicBadge.vue';
import {
  finalMessage,
  galleryItems,
  heroContent,
  reasonCards,
  storyContent,
  timelineItems
} from './content/loveContent';
</script>

<template>
  <div class="app-shell">
    <FloatingParticles />
    <div class="ambient ambient--one" aria-hidden="true"></div>
    <div class="ambient ambient--two" aria-hidden="true"></div>
    <div class="ambient ambient--three" aria-hidden="true"></div>

    <HeroSection :content="heroContent" />

    <main>
      <StorySection :content="storyContent" />
      <ReasonsSection :items="reasonCards" />
      <MemoryTimeline :items="timelineItems" />
      <PhotoGallery :items="galleryItems" />
      <FinalMessageSection :content="finalMessage" />
    </main>

    <MusicBadge />
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  isolation: isolate;
  overflow: clip;
}

.ambient {
  position: fixed;
  inset: auto;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(24px);
}

.ambient--one {
  top: 8%;
  left: -4%;
  width: clamp(220px, 24vw, 340px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(246, 186, 208, 0.44), rgba(246, 186, 208, 0));
}

.ambient--two {
  top: 36%;
  right: -5%;
  width: clamp(240px, 28vw, 400px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(238, 212, 157, 0.34), rgba(238, 212, 157, 0));
}

.ambient--three {
  bottom: 6%;
  left: 16%;
  width: clamp(220px, 22vw, 300px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0));
}

main {
  position: relative;
  z-index: 1;
}
</style>
