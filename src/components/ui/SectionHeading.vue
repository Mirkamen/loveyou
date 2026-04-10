<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string;
    title: string;
    description: string;
    align?: 'left' | 'center';
  }>(),
  {
    align: 'center'
  }
);
</script>

<template>
  <div :class="['section-heading', `section-heading--${align}`]">
    <span class="eyebrow">{{ eyebrow }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  display: grid;
  gap: 16px;
}

.section-heading--center {
  justify-items: center;
  text-align: center;
}

.section-heading--left {
  justify-items: start;
  text-align: left;
}
</style>
