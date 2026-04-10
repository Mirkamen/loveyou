<script setup lang="ts">
import type { ReasonCard } from '../../content/loveContent';
import SectionHeading from '../ui/SectionHeading.vue';

defineProps<{
  items: ReasonCard[];
}>();
</script>

<template>
  <section class="section-shell">
    <div class="container">
      <div class="reasons">
        <div v-reveal>
          <SectionHeading
            eyebrow="За что я тебя люблю"
            title="Не из-за чего-то одного, а потому что всё в тебе ощущается прекрасным."
            description="Некоторые чувства легко объяснить списком. Наши глубже, но именно к этим деталям моё сердце возвращается снова и снова."
          />
        </div>

        <div class="reasons__grid">
          <article
            v-for="(item, index) in items"
            :key="item.title"
            class="reason-card glass-card"
            v-reveal="{ origin: 'up', delay: 110 + index * 110 }"
          >
            <div class="reason-card__top">
              <span class="reason-card__label">{{ item.label }}</span>
              <span class="reason-card__accent">{{ item.accent }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reasons {
  display: grid;
  gap: 32px;
}

.reasons__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.reason-card {
  min-height: 250px;
  padding: 24px;
  display: grid;
  align-content: start;
  gap: 16px;
}

.reason-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.reason-card__label,
.reason-card__accent {
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.reason-card__label {
  color: var(--text-muted);
}

.reason-card__accent {
  color: var(--accent-strong);
}

.reason-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.52rem;
  font-weight: 600;
  line-height: 1.12;
  color: var(--text-strong);
}

.reason-card p {
  margin: 0;
  line-height: 1.8;
  color: var(--text);
}

@media (max-width: 960px) {
  .reasons__grid {
    grid-template-columns: 1fr;
  }

  .reason-card {
    min-height: auto;
  }
}
</style>
