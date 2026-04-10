<script setup lang="ts">
import type { FinalMessageContent } from '../../content/loveContent';

defineProps<{
  content: FinalMessageContent;
}>();
</script>

<template>
  <section id="final-note" class="section-shell">
    <div class="container">
      <div class="finale">
        <div class="finale__stack">
          <figure class="finale__photo finale__photo--back">
            <div class="finale__photo-card glass-card" v-reveal="'left'">
              <div class="finale__photo-frame">
                <img
                  :src="content.stackPhotos[0].src"
                  :alt="content.stackPhotos[0].alt"
                  :style="{ objectPosition: content.stackPhotos[0].objectPosition ?? 'center' }"
                />
              </div>
            </div>
          </figure>

          <figure class="finale__photo finale__photo--front">
            <div class="finale__photo-card glass-card" v-reveal="{ origin: 'up', delay: 160 }">
              <div class="finale__photo-frame">
                <img
                  :src="content.stackPhotos[1].src"
                  :alt="content.stackPhotos[1].alt"
                  :style="{ objectPosition: content.stackPhotos[1].objectPosition ?? 'center' }"
                />
              </div>
            </div>
          </figure>

          <div class="finale__seal glass-card" v-reveal="{ origin: 'up', delay: 260 }">
            <span>Навсегда</span>
            <p>{{ content.promise }}</p>
          </div>
        </div>

        <div class="finale__card section-panel" v-reveal="{ origin: 'right', delay: 120 }">
          <span class="eyebrow">{{ content.eyebrow }}</span>
          <h2 class="section-title finale__title">{{ content.title }}</h2>

          <div class="finale__paragraphs">
            <p v-for="paragraph in content.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>

          <p class="finale__promise">{{ content.promise }}</p>

          <div class="finale__actions">
            <a class="button button--primary" href="#top">Прочитать снова</a>
            <a class="button button--ghost" href="#memories">Наши любимые моменты</a>
          </div>

          <p class="finale__signature">{{ content.signature }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.finale {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: clamp(28px, 4vw, 52px);
  align-items: center;
}

.finale__stack {
  position: relative;
  min-height: 620px;
}

.finale__photo {
  position: absolute;
  width: min(100%, 360px);
}

.finale__photo--back {
  top: 0;
  left: 0;
  transform: rotate(-8deg);
}

.finale__photo--front {
  right: 8%;
  top: 26%;
  transform: rotate(8deg);
}

.finale__photo-card {
  padding: 12px;
}

.finale__photo-frame {
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 0.82;
}

.finale__photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.finale__seal {
  position: absolute;
  bottom: 10%;
  left: 12%;
  max-width: 280px;
  padding: 22px 24px;
}

.finale__seal span {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-strong);
}

.finale__seal p {
  margin: 0;
  line-height: 1.8;
  color: var(--text);
}

.finale__card {
  display: grid;
  gap: 22px;
}

.finale__title {
  max-width: 12ch;
}

.finale__paragraphs {
  display: grid;
  gap: 16px;
}

.finale__paragraphs p,
.finale__promise {
  margin: 0;
  color: var(--text);
  line-height: 1.82;
}

.finale__promise {
  padding: 16px 18px;
  border-radius: 22px;
  background: rgba(250, 237, 238, 0.78);
  border: 1px solid rgba(242, 211, 220, 0.85);
  color: var(--text-strong);
}

.finale__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.finale__signature {
  margin: 6px 0 0;
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--accent-strong);
}

@media (max-width: 980px) {
  .finale {
    grid-template-columns: 1fr;
  }

  .finale__stack {
    min-height: 520px;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .finale__title {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .finale__stack {
    min-height: 440px;
  }

  .finale__photo {
    width: min(78%, 280px);
  }

  .finale__seal {
    left: 0;
    right: 0;
    bottom: 0;
    max-width: none;
  }

  .finale__actions {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
