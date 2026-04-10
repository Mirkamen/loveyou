<script setup lang="ts">
import type { StoryContent } from '../../content/loveContent';
import SectionHeading from '../ui/SectionHeading.vue';

defineProps<{
  content: StoryContent;
}>();
</script>

<template>
  <section id="story" class="section-shell">
    <div class="container">
      <div class="story section-panel">
        <div class="story__media" v-reveal="'left'">
          <div class="story__image-wrap">
            <img
              :src="content.photo.src"
              :alt="content.photo.alt"
              :style="{ objectPosition: content.photo.objectPosition ?? 'center' }"
            />
          </div>

          <div class="story__quote">
            <span>{{ content.photo.caption }}</span>
            <p>{{ content.quote }}</p>
          </div>
        </div>

        <div class="story__copy">
          <div v-reveal="{ origin: 'right' }">
            <SectionHeading
              :eyebrow="content.eyebrow"
              :title="content.title"
              :description="content.description"
              align="left"
            />
          </div>

          <div class="story__moments">
            <article
              v-for="(moment, index) in content.moments"
              :key="moment.title"
              class="story__moment glass-card"
              v-reveal="{ origin: 'up', delay: 110 + index * 100 }"
            >
              <span class="story__moment-label">{{ moment.label }}</span>
              <h3>{{ moment.title }}</h3>
              <p>{{ moment.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  gap: clamp(28px, 4vw, 52px);
}

.story__media {
  position: relative;
  display: grid;
  gap: 18px;
}

.story__image-wrap {
  border-radius: 32px;
  overflow: hidden;
  aspect-ratio: 0.9;
  background: rgba(255, 255, 255, 0.58);
}

.story__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story__quote {
  padding: 22px 24px;
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(255, 245, 244, 0.7));
  border: 1px solid rgba(247, 229, 233, 0.9);
  box-shadow: 0 16px 42px rgba(166, 104, 127, 0.14);
}

.story__quote span {
  display: inline-block;
  margin-bottom: 10px;
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-strong);
}

.story__quote p {
  margin: 0;
  color: var(--text);
  line-height: 1.8;
}

.story__copy {
  display: grid;
  align-content: center;
  gap: 28px;
}

.story__moments {
  display: grid;
  gap: 16px;
}

.story__moment {
  padding: 22px 24px;
}

.story__moment-label {
  display: inline-flex;
  margin-bottom: 10px;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-strong);
}

.story__moment h3 {
  margin: 0 0 10px;
  font-size: 1.32rem;
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.15;
  color: var(--text-strong);
}

.story__moment p {
  margin: 0;
  line-height: 1.75;
  color: var(--text);
}

@media (max-width: 960px) {
  .story {
    grid-template-columns: 1fr;
  }
}
</style>
