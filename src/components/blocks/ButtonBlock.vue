<script setup lang="ts">
/** A button link. By default it stretches to fill its FluidBlock area. */
import { isInternal } from '../../lib/links'

withDefaults(
  defineProps<{
    to: string
    /** Fill the whole block area (Squarespace default) */
    stretch?: boolean
    align?: 'left' | 'center' | 'right'
    newWindow?: boolean
  }>(),
  { stretch: true, align: 'center' },
)
</script>

<template>
  <div class="button-block" :class="[`align-${align}`, { stretch }]">
    <RouterLink v-if="isInternal(to) && !newWindow" :to="to" class="btn"><slot /></RouterLink>
    <a v-else :href="to" class="btn" :target="newWindow ? '_blank' : undefined" :rel="newWindow ? 'noopener' : undefined">
      <slot />
    </a>
  </div>
</template>

<style scoped>
.button-block {
  display: flex;
  height: 100%;
}
.align-left {
  justify-content: flex-start;
}
.align-center {
  justify-content: center;
}
.align-right {
  justify-content: flex-end;
}
.stretch .btn {
  width: 100%;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
