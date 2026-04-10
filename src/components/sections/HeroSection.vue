<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { HeroContent } from '../../content/loveContent';

const props = defineProps<{
  content: HeroContent;
}>();

const scrollY = ref(0);

const updateScroll = () => {
  scrollY.value = window.scrollY || 0;
};

onMounted(() => {
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll);
});

const mainCardStyle = computed(() => ({
  transform: `translate3d(0, ${Math.min(scrollY.value * 0.12, 64)}px, 0)`
}));

const topCardStyle = computed(() => ({
  transform: `translate3d(0, ${Math.max(scrollY.value * -0.07, -36)}px, 0) rotate(-7deg)`
}));

const bottomCardStyle = computed(() => ({
  transform: `translate3d(0, ${Math.max(scrollY.value * -0.05, -24)}px, 0) rotate(8deg)`
}));
</script>

<template>
  <section id="top" class="hero section-shell">
    <div class="container">
      <div class="hero__layout">
        <div class="hero__copy" v-reveal="'left'">
          <span class="eyebrow">{{ props.content.eyebrow }}</span>
          <h1 class="display-title hero__title">{{ props.content.title }}</h1>
          <p class="hero__subtitle">
            {{ props.content.subtitle }}
          </p>

          <div class="hero__actions">
            <a class="button button--primary" :href="props.content.primaryAction.href">
              {{ props.content.primaryAction.label }}
            </a>
            <a class="button button--ghost" :href="props.content.secondaryAction.href">
              {{ props.content.secondaryAction.label }}
            </a>
          </div>

          <p class="hero__note">
            {{ props.content.note }}
          </p>

          <div class="hero__stats">
            <article
              v-for="(stat, index) in props.content.stats"
              :key="stat.label"
              class="hero__stat glass-card"
              v-reveal="{ delay: 120 + index * 90 }"
            >
              <span>{{ stat.label }}</span>
              <strong>{{ stat.value }}</strong>
            </article>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__halo"></div>

          <div class="hero__card-shell hero__card-shell--main" :style="mainCardStyle">
            <figure class="hero__card hero__card--main glass-card" v-reveal="{ origin: 'right', delay: 150 }">
              <div class="hero__photo-frame">
                <img
                  :src="props.content.photo.src"
                  :alt="props.content.photo.alt"
                  :style="{ objectPosition: props.content.photo.objectPosition ?? 'center' }"
                />
              </div>

              <figcaption class="hero__caption">
                <span>{{ props.content.photo.caption }}</span>
                <p>{{ props.content.photo.detail }}</p>
              </figcaption>
            </figure>
          </div>

          <div class="hero__card-shell hero__card-shell--top" :style="topCardStyle">
            <figure class="hero__card hero__card--mini glass-card" v-reveal="{ origin: 'up', delay: 280 }">
              <div class="hero__mini-image">
                <img
                  :src="props.content.floatingPhotos[0].src"
                  :alt="props.content.floatingPhotos[0].alt"
                  :style="{ objectPosition: props.content.floatingPhotos[0].objectPosition ?? 'center' }"
                />
              </div>
              <figcaption>{{ props.content.floatingPhotos[0].caption }}</figcaption>
            </figure>
          </div>

          <div class="hero__card-shell hero__card-shell--bottom" :style="bottomCardStyle">
            <figure class="hero__card hero__card--mini glass-card" v-reveal="{ origin: 'up', delay: 360 }">
              <div class="hero__mini-image">
                <img
                  :src="props.content.floatingPhotos[1].src"
                  :alt="props.content.floatingPhotos[1].alt"
                  :style="{ objectPosition: props.content.floatingPhotos[1].objectPosition ?? 'center' }"
                />
              </div>
              <figcaption>{{ props.content.floatingPhotos[1].caption }}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  padding-top: clamp(36px, 6vw, 64px);
  display: flex;
  align-items: center;
}

.hero__layout {
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 1.03fr) minmax(0, 0.97fr);
  gap: clamp(32px, 5vw, 64px);
}

.hero__copy {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 24px;
}

.hero__title {
  max-width: 12ch;
}

.hero__subtitle {
  max-width: 62ch;
  margin: 0;
  color: var(--text);
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  line-height: 1.8;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero__note {
  margin: 0;
  max-width: 34rem;
  color: var(--text-muted);
  font-size: 0.98rem;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.hero__stat {
  padding: 18px 20px;
  display: grid;
  gap: 8px;
}

.hero__stat span {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero__stat strong {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: var(--text-strong);
}

.hero__visual {
  position: relative;
  min-height: clamp(540px, 68vw, 780px);
}

.hero__halo {
  position: absolute;
  inset: 10% auto auto 12%;
  width: clamp(220px, 28vw, 360px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(248, 196, 213, 0.55), rgba(248, 196, 213, 0));
  filter: blur(12px);
}

.hero__card-shell {
  position: absolute;
}

.hero__card-shell--main {
  right: 0;
  top: 4%;
  width: min(100%, 520px);
}

.hero__card-shell--top {
  top: 0;
  left: 0;
  width: min(44%, 228px);
}

.hero__card-shell--bottom {
  right: 12%;
  bottom: 0;
  width: min(44%, 228px);
}

.hero__card {
  overflow: hidden;
}

.hero__card--main {
  width: 100%;
  padding: 14px;
}

.hero__photo-frame {
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 0.88;
}

.hero__photo-frame img,
.hero__mini-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__caption {
  padding: 18px 8px 6px;
  display: grid;
  gap: 8px;
}

.hero__caption span {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 600;
  line-height: 1;
  color: var(--text-strong);
}

.hero__caption p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.7;
}

.hero__card--mini {
  width: 100%;
  padding: 10px;
}

.hero__mini-image {
  border-radius: 22px;
  overflow: hidden;
  aspect-ratio: 0.82;
}

.hero__card--mini figcaption {
  padding: 12px 6px 4px;
  font-size: 0.92rem;
  color: var(--text-strong);
}

@media (max-width: 1080px) {
  .hero {
    min-height: auto;
  }

  .hero__layout {
    grid-template-columns: 1fr;
  }

  .hero__title,
  .hero__subtitle,
  .hero__note {
    max-width: none;
  }

  .hero__visual {
    min-height: 620px;
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 720px) {
  .hero__stats {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 520px;
  }

  .hero__card-shell--main {
    position: relative;
    width: min(100%, 100%);
    top: auto;
    right: auto;
  }

  .hero__card-shell--top,
  .hero__card-shell--bottom {
    width: 38%;
  }

  .hero__card-shell--top {
    top: -10px;
    left: 0;
  }

  .hero__card-shell--bottom {
    right: 0;
    bottom: -10px;
  }
}

@media (max-width: 560px) {
  .hero__actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero__visual {
    min-height: 430px;
  }

  .hero__card-shell--top,
  .hero__card-shell--bottom {
    width: 42%;
  }

  .hero__card--mini figcaption {
    font-size: 0.8rem;
  }
}
</style>
