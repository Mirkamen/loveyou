<script setup lang="ts">
const particles = [
  { left: '4%', top: '10%', size: '16px', duration: '16s', delay: '-2s', kind: 'orb' },
  { left: '12%', top: '68%', size: '10px', duration: '13s', delay: '-4s', kind: 'spark' },
  { left: '19%', top: '26%', size: '14px', duration: '18s', delay: '-7s', kind: 'orb' },
  { left: '27%', top: '82%', size: '18px', duration: '17s', delay: '-5s', kind: 'spark' },
  { left: '36%', top: '14%', size: '12px', duration: '15s', delay: '-3s', kind: 'orb' },
  { left: '48%', top: '58%', size: '20px', duration: '19s', delay: '-9s', kind: 'orb' },
  { left: '57%', top: '18%', size: '14px', duration: '14s', delay: '-1s', kind: 'spark' },
  { left: '65%', top: '76%', size: '16px', duration: '16s', delay: '-8s', kind: 'orb' },
  { left: '74%', top: '34%', size: '10px', duration: '12s', delay: '-6s', kind: 'spark' },
  { left: '82%', top: '62%', size: '18px', duration: '18s', delay: '-10s', kind: 'orb' },
  { left: '89%', top: '12%', size: '12px', duration: '14s', delay: '-4s', kind: 'spark' },
  { left: '93%', top: '84%', size: '20px', duration: '20s', delay: '-11s', kind: 'orb' }
];
</script>

<template>
  <div class="particles" aria-hidden="true">
    <span
      v-for="particle in particles"
      :key="`${particle.left}-${particle.top}`"
      :class="['particle', `particle--${particle.kind}`]"
      :style="{
        left: particle.left,
        top: particle.top,
        width: particle.size,
        height: particle.size,
        animationDuration: particle.duration,
        animationDelay: particle.delay
      }"
    ></span>
  </div>
</template>

<style scoped>
.particles {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  opacity: 0.72;
  animation: drift ease-in-out infinite;
}

.particle--orb {
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 42%),
    linear-gradient(140deg, rgba(246, 187, 210, 0.48), rgba(227, 191, 125, 0.28));
  box-shadow: 0 0 28px rgba(245, 196, 212, 0.3);
  filter: blur(0.3px);
}

.particle--spark::before,
.particle--spark::after {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(243, 197, 210, 0.38));
}

.particle--spark::before {
  width: 2px;
  height: 100%;
}

.particle--spark::after {
  width: 100%;
  height: 2px;
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(0.9);
  }

  50% {
    transform: translate3d(0, -28px, 0) scale(1.04);
  }
}

@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none;
  }
}
</style>
