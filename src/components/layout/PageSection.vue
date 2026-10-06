<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Colour theme: white, light, dark, black, black-bold, bright-inverse */
    theme?: string
    /** Minimum height and vertical padding */
    height?: 'small' | 'medium' | 'large' | 'auto'
    /** Where the content sits when the section is taller than it */
    align?: 'top' | 'middle' | 'bottom'
    /** Optional full-bleed background image */
    bgImage?: string
    /** Darkening over the background image, 0–1 */
    overlay?: number
  }>(),
  { theme: 'white', height: 'small', align: 'middle', overlay: 0 },
)
</script>

<template>
  <section class="page-section" :data-theme="theme" :class="[`h-${height}`, `v-${align}`]">
    <div v-if="bgImage" class="section-background">
      <img :src="bgImage" alt="" loading="lazy" decoding="async" />
      <div v-if="overlay" class="overlay" :style="{ opacity: overlay }" />
    </div>
    <div class="content-wrapper">
      <div class="content">
        <slot />
      </div>
    </div>
  </section>
</template>
