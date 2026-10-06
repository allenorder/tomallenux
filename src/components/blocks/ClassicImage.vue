<script setup lang="ts">
/** An inline image at its natural proportions, with an optional caption (slot). */
import { computed } from 'vue'
import { imageInfo } from '../../lib/images'
import { isInternal } from '../../lib/links'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    /** Largest width the image is shown at, in px */
    maxWidth?: number
    /** Crop to this shape: height as a percentage of width (e.g. 75 for 4:3) */
    aspect?: number
    to?: string
    sizes?: string
  }>(),
  { alt: '', sizes: '(max-width: 767px) 100vw, 50vw' },
)

const info = computed(() => imageInfo(props.src))
</script>

<template>
  <figure class="classic-image">
    <component
      :is="to ? (isInternal(to) ? 'RouterLink' : 'a') : 'div'"
      v-bind="to ? (isInternal(to) ? { to } : { href: to }) : {}"
      class="classic-image__frame"
      :style="{ maxWidth: maxWidth ? `${maxWidth}px` : undefined, aspectRatio: aspect ? `100 / ${aspect}` : undefined }"
      :class="{ 'is-cropped': aspect }"
    >
      <img
        :src="src"
        :srcset="info.srcset"
        :sizes="sizes"
        :width="info.width"
        :height="info.height"
        :alt="alt"
        loading="lazy"
        decoding="async"
      />
    </component>
    <figcaption v-if="$slots.default" class="rte">
      <slot />
    </figcaption>
  </figure>
</template>

<style scoped>
.classic-image {
  margin: 0;
}
.classic-image__frame {
  display: block;
  margin: 0 auto;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
.is-cropped {
  overflow: hidden;
}
.is-cropped img {
  height: 100%;
  object-fit: cover;
}
figcaption {
  font-size: var(--normal-size);
}
figcaption :deep(p) {
  margin: 1rem 0;
}
figcaption :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
