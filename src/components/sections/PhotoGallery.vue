<script setup lang="ts">
import type { GalleryItem } from '../../content/loveContent';
import SectionHeading from '../ui/SectionHeading.vue';

defineProps<{
  items: GalleryItem[];
}>();
</script>

<template>
  <section id="gallery" class="section-shell">
    <div class="container">
      <div class="gallery">
        <div v-reveal>
          <SectionHeading
            eyebrow="Нежная фотогалерея"
            title="Маленький архив твоей красоты, нашей нежности и ощущения «мы»."
            description="Эти фотографии собраны не как сетка миниатюр, а как воспоминания. Каждый кадр здесь сохраняет тепло, близость и немного волшебства."
          />
        </div>

        <div class="gallery__grid">
          <article
            v-for="(item, index) in items"
            :key="item.title"
            :class="['gallery-card glass-card', `gallery-card--${item.size}`]"
            v-reveal="{ origin: 'up', delay: 100 + index * 80 }"
          >
            <div class="gallery-card__image">
              <img
                :src="item.photo.src"
                :alt="item.photo.alt"
                :style="{ objectPosition: item.photo.objectPosition ?? 'center' }"
              />
            </div>

            <div class="gallery-card__overlay">
              <span>{{ item.title }}</span>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  gap: 34px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 26px;
  gap: 18px;
}

.gallery-card {
  position: relative;
  grid-column: span 4;
  grid-row: span 14;
  padding: 12px;
  overflow: hidden;
}

.gallery-card--feature {
  grid-column: span 7;
  grid-row: span 22;
}

.gallery-card--tall {
  grid-column: span 5;
  grid-row: span 22;
}

.gallery-card--wide {
  grid-column: span 6;
  grid-row: span 16;
}

.gallery-card--medium {
  grid-column: span 6;
  grid-row: span 16;
}

.gallery-card__image {
  width: 100%;
  height: 100%;
  border-radius: 28px;
  overflow: hidden;
}

.gallery-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 480ms ease,
    filter 480ms ease;
}

.gallery-card:hover .gallery-card__image img {
  transform: scale(1.05);
  filter: saturate(1.08);
}

.gallery-card__overlay {
  position: absolute;
  right: 22px;
  bottom: 22px;
  left: 22px;
  padding: 18px 20px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(54, 34, 45, 0.06), rgba(54, 34, 45, 0.68));
  color: #fff8fb;
  backdrop-filter: blur(12px);
}

.gallery-card__overlay span {
  display: block;
  margin-bottom: 6px;
  font-family: var(--font-display);
  font-size: 1.45rem;
  line-height: 1;
}

.gallery-card__overlay p {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.65;
  color: rgba(255, 248, 251, 0.84);
}

@media (max-width: 960px) {
  .gallery__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: auto;
  }

  .gallery-card,
  .gallery-card--feature,
  .gallery-card--tall,
  .gallery-card--wide,
  .gallery-card--medium {
    grid-column: span 1;
    grid-row: auto;
    min-height: 360px;
  }
}

@media (max-width: 640px) {
  .gallery__grid {
    grid-template-columns: 1fr;
  }

  .gallery-card,
  .gallery-card--feature,
  .gallery-card--tall,
  .gallery-card--wide,
  .gallery-card--medium {
    grid-column: auto;
    min-height: 320px;
  }
}
</style>
