<script setup lang="ts">
/**
 * One block in a FluidGrid, positioned with CSS grid-area syntax
 * "rowStart/colStart/rowEnd/colEnd".
 *
 * Desktop grid: 24 content columns, numbered 2–25 (column 1 and 26 are the page gutters).
 * Mobile grid:  8 content columns, numbered 2–9.
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Desktop position, e.g. "2/5/4/14" */
    d: string
    /** Mobile position, e.g. "12/2/14/10" */
    m: string
    z?: number
    /** Vertical alignment inside the block area */
    valign?: 'start' | 'center' | 'end'
    /** Mobile vertical alignment (defaults to `valign`) */
    mValign?: 'start' | 'center' | 'end'
  }>(),
  { z: 0, valign: 'start' },
)

const flex = { start: 'flex-start', center: 'center', end: 'flex-end' }
const style = computed(() => ({
  '--d': props.d,
  '--m': props.m,
  '--z': props.z,
  '--valign-d': flex[props.valign],
  '--valign-m': flex[props.mValign ?? props.valign],
}))
</script>

<template>
  <div class="fluid-block" :style="style">
    <slot />
  </div>
</template>
