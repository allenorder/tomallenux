<script setup lang="ts">
/**
 * An image that fills its FluidBlock area.
 * `fit="cover"` crops to fill; `fit="contain"` shows the whole image.
 */
import { computed } from 'vue'
import { imageInfo } from '../../lib/images'
import { isInternal } from '../../lib/links'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    fit?: 'cover' | 'contain'
    /** Focal point for cropping, e.g. "50% 30%" */
    focal?: string
    /** Corner radius in px */
    radius?: number
    /** Crop to a circle */
    shape?: 'circle'
    /** Optional link */
    to?: string
    /** Load immediately (use for images visible on page load) */
    eager?: boolean
    sizes?: string
  }>(),
  { alt: '', fit: 'cover', focal: '50% 50%', radius: 0, sizes: '(max-width: 767px) 100vw, 50vw' },
)

const info = computed(() => imageInfo(props.src))
</script>

<template>
  <div
    class="image-block"
    :style="{ borderRadius: radius ? `${radius}px` : undefined, clipPath: shape === 'circle' ? 'circle(closest-side)' : undefined }"
  >
    <component
      :is="to ? (isInternal(to) ? 'RouterLink' : 'a') : 'div'"
      v-bind="to ? (isInternal(to) ? { to } : { href: to }) : {}"
      class="image-block__inner"
    >
      <img
        :src="src"
        :srcset="info.srcset"
        :sizes="sizes"
        :width="info.width"
        :height="info.height"
        :alt="alt"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        :style="{ objectFit: fit, objectPosition: focal }"
      />
    </component>
  </div>
</template>

<style scoped>
.image-block {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  min-height: 1px;
  overflow: hidden;
}
.image-block__inner {
  position: absolute;
  inset: 0;
  display: block;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
