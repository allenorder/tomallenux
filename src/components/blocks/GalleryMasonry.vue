<script setup lang="ts">
/**
 * Masonry gallery: each image goes into the currently shortest column
 * (3 columns on desktop, 2 on mobile), with an optional caption below.
 */
import { computed } from 'vue'
import { imageInfo } from '../../lib/images'

const props = withDefaults(
  defineProps<{
    items: { src: string; alt?: string; caption?: string }[]
    columns?: number
    mobileColumns?: number
  }>(),
  { columns: 3, mobileColumns: 2 },
)

const withInfo = computed(() => props.items.map((item) => ({ ...item, ...imageInfo(item.src) })))

function distribute(n: number) {
  const cols = Array.from({ length: n }, () => ({ height: 0, items: [] as typeof withInfo.value }))
  for (const item of withInfo.value) {
    const ratio = item.width && item.height ? item.height / item.width : 1
    const col = cols.reduce((a, b) => (b.height < a.height ? b : a))
    col.items.push(item)
    col.height += ratio + (item.caption ? 0.1 : 0)
  }
  return cols.map((c) => c.items)
}

const desktop = computed(() => distribute(props.columns))
const mobile = computed(() => distribute(props.mobileColumns))
</script>

<template>
  <div class="gallery">
    <div v-for="(layout, li) in [mobile, desktop]" :key="li" class="gallery__layout" :class="li ? 'is-desktop' : 'is-mobile'">
      <div v-for="(col, ci) in layout" :key="ci" class="gallery__col">
        <figure v-for="item in col" :key="item.src" class="gallery__item">
          <img
            :src="item.src"
            :srcset="item.srcset"
            :sizes="li ? '33vw' : '50vw'"
            :width="item.width"
            :height="item.height"
            :alt="item.alt ?? item.caption ?? ''"
            loading="lazy"
            decoding="async"
          />
          <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  --gap: 3px;
  padding: var(--mobile-gutter);
}
.gallery__layout {
  display: flex;
  gap: var(--gap);
}
.is-desktop {
  display: none;
}
.gallery__col {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: var(--gap);
  min-width: 0;
}
.gallery__item {
  margin: 0;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
figcaption {
  padding: 15px 0;
  color: var(--text);
  font-size: var(--normal-size);
  line-height: var(--body-line);
}
@media (min-width: 768px) {
  .gallery {
    --gap: 1.46vw;
    padding: var(--page-gutter);
  }
  .is-mobile {
    display: none;
  }
  .is-desktop {
    display: flex;
  }
}
</style>
