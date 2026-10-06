<script setup lang="ts">
/**
 * Rich text. Write plain HTML in the slot: h1–h4, p, ul/ol, strong, em, a.
 * Paragraph classes: text-large, text-small. Inline: <span class="text-white">.
 * Same-site links (<a href="/about">) navigate without a page reload.
 */
import { useRouter } from 'vue-router'
import { isInternal } from '../../lib/links'

withDefaults(
  defineProps<{
    /** Background colour behind the text (any CSS colour) */
    bg?: string
    /** Inner padding, e.g. "6%" (percentages are of the block width) */
    padding?: string
    /** Corner radius in px */
    radius?: number
  }>(),
  { radius: 0 },
)

const router = useRouter()
function onClick(e: MouseEvent) {
  const a = (e.target as HTMLElement).closest('a')
  const href = a?.getAttribute('href')
  if (!a || !href || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || !isInternal(href)) return
  e.preventDefault()
  router.push(href)
}
</script>

<template>
  <div
    class="rte text-block"
    :style="{ background: bg, padding, borderRadius: radius ? `${radius}px` : undefined }"
    @click="onClick"
  >
    <slot />
  </div>
</template>
