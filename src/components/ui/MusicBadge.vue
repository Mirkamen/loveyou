<script setup lang="ts">
import { ref } from 'vue';

const isPlaying = ref(true);

const toggleState = () => {
  isPlaying.value = !isPlaying.value;
};
</script>

<template>
  <button
    class="music-badge"
    type="button"
    :aria-pressed="isPlaying"
    @click="toggleState"
  >
    <span class="music-badge__icon" aria-hidden="true">
      <span class="music-badge__disc"></span>
      <span class="music-badge__pulse"></span>
    </span>

    <span class="music-badge__copy">
      <strong>{{ isPlaying ? 'Режим любви' : 'Режим сияния' }}</strong>
      <span>{{ isPlaying ? 'воображаемый медленный танец' : 'только сердцебиение' }}</span>
    </span>
  </button>
</template>

<style scoped>
.music-badge {
  position: fixed;
  right: clamp(16px, 2vw, 24px);
  bottom: clamp(16px, 2vw, 24px);
  z-index: 30;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  padding: 12px 18px 12px 12px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(255, 245, 244, 0.62)),
    rgba(255, 255, 255, 0.58);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 48px rgba(166, 104, 127, 0.2);
  color: var(--text-strong);
  transition:
    transform 240ms ease,
    box-shadow 240ms ease,
    border-color 240ms ease;
}

.music-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 54px rgba(166, 104, 127, 0.24);
  border-color: rgba(247, 201, 213, 0.92);
}

.music-badge__icon {
  position: relative;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(249, 207, 221, 0.68));
}

.music-badge__disc {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 38%),
    linear-gradient(135deg, #f7b2c6, #ddb371);
  animation: spin 6s linear infinite;
}

.music-badge__pulse {
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(231, 162, 186, 0.48);
  border-radius: 50%;
  animation: pulse 2.8s ease-in-out infinite;
}

.music-badge__copy {
  display: grid;
  gap: 2px;
  text-align: left;
}

.music-badge__copy strong {
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.music-badge__copy span {
  font-size: 0.76rem;
  color: var(--text-muted);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.92);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .music-badge {
    gap: 12px;
    padding-right: 16px;
    padding-left: 10px;
  }

  .music-badge__copy strong {
    font-size: 0.84rem;
  }

  .music-badge__copy span {
    font-size: 0.72rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .music-badge,
  .music-badge__disc,
  .music-badge__pulse {
    animation: none;
  }
}
</style>
