<script setup lang="ts">
/**
 * A section's grid. `rows` is [mobile rows, desktop rows]; rows grow to fit their content.
 * `gap` is the space between rows and columns in px.
 * Place children with <FluidBlock>.
 */
withDefaults(defineProps<{ rows: [number, number]; gap?: number }>(), { gap: 11 })
</script>

<template>
  <div class="fluid-grid" :style="{ '--rows-m': rows[0], '--rows-d': rows[1], '--grid-gap': `${gap}px` }">
    <slot />
  </div>
</template>
