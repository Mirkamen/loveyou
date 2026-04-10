<script setup lang="ts">
import type { TimelineItem } from '../../content/loveContent';
import SectionHeading from '../ui/SectionHeading.vue';

defineProps<{
  items: TimelineItem[];
}>();
</script>

<template>
  <section id="memories" class="section-shell">
    <div class="container">
      <div class="timeline">
        <div v-reveal>
          <SectionHeading
            eyebrow="Наши воспоминания"
            title="Несколько глав нашей истории, сохранённых в мягком свете."
            description="Это не просто галерея. Скорее моменты, которые снова всплывают у меня в голове каждый раз, когда я думаю, как сильно мне повезло любить тебя."
          />
        </div>

        <div class="timeline__grid">
          <article
            v-for="(item, index) in items"
            :key="item.title"
            class="timeline-card glass-card"
            v-reveal="{ origin: index % 2 === 0 ? 'left' : 'right', delay: 120 + index * 90 }"
          >
            <div class="timeline-card__image">
              <img
                :src="item.photo.src"
                :alt="item.photo.alt"
                :style="{ objectPosition: item.photo.objectPosition ?? 'center' }"
              />
            </div>

            <div class="timeline-card__copy">
              <span class="timeline-card__index">0{{ index + 1 }}</span>
              <span class="timeline-card__label">{{ item.label }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  display: grid;
  gap: 34px;
}

.timeline__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.timeline-card {
  overflow: hidden;
  padding: 12px;
  display: grid;
  gap: 18px;
}

.timeline-card__image {
  border-radius: 26px;
  overflow: hidden;
  aspect-ratio: 1.08;
}

.timeline-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease;
}

.timeline-card:hover .timeline-card__image img {
  transform: scale(1.04);
}

.timeline-card__copy {
  padding: 0 10px 12px;
  display: grid;
  gap: 10px;
}

.timeline-card__index,
.timeline-card__label {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.timeline-card__index {
  color: var(--accent-strong);
}

.timeline-card__label {
  color: var(--text-muted);
}

.timeline-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.15;
  color: var(--text-strong);
}

.timeline-card p {
  margin: 0;
  line-height: 1.75;
  color: var(--text);
}

@media (max-width: 900px) {
  .timeline__grid {
    grid-template-columns: 1fr;
  }
}
</style>
