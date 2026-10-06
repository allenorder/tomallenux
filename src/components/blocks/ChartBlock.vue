<script setup lang="ts">
/** Donut chart with a legend and caption. */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    data: { label: string; value: number }[]
    caption?: string
    colors?: string[]
  }>(),
  { colors: () => ['#797979', '#bfbfbf', '#5a5a5a', '#dadada', '#9d9d9d'] },
)

const R = 50
const r = 25
const segments = computed(() => {
  const total = props.data.reduce((n, d) => n + d.value, 0)
  let angle = -Math.PI / 2
  return props.data.map((d, i) => {
    const a0 = angle
    const a1 = (angle += (d.value / total) * Math.PI * 2)
    const large = a1 - a0 > Math.PI ? 1 : 0
    const p = (rad: number, a: number) => `${(rad * Math.cos(a)).toFixed(3)} ${(rad * Math.sin(a)).toFixed(3)}`
    return {
      color: props.colors[i % props.colors.length],
      path: `M${p(R, a0)} A${R} ${R} 0 ${large} 1 ${p(R, a1)} L${p(r, a1)} A${r} ${r} 0 ${large} 0 ${p(r, a0)}Z`,
      label: `${d.label}: ${d.value}`,
    }
  })
})
</script>

<template>
  <figure class="chart-block">
    <svg viewBox="-51 -51 102 102" role="img" :aria-label="data.map((d) => `${d.label} ${d.value}`).join(', ')">
      <path v-for="(s, i) in segments" :key="i" :d="s.path" :fill="s.color" stroke="#fff" stroke-width="0.6">
        <title>{{ s.label }}</title>
      </path>
    </svg>
    <ul class="legend">
      <li v-for="(d, i) in data" :key="d.label">
        <span :style="{ background: colors[i % colors.length] }" />{{ d.label }}
      </li>
    </ul>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.chart-block {
  margin: 0;
  color: var(--text);
}
svg {
  display: block;
  width: 50%;
  margin: 0 auto;
}
.legend {
  display: flex;
  justify-content: center;
  gap: 1.5em;
  margin: 16px 0;
  padding: 0;
  list-style: none;
  font-size: var(--normal-size);
}
.legend li {
  display: flex;
  align-items: center;
  gap: 0.6em;
}
.legend span {
  width: 1em;
  height: 1em;
}
figcaption {
  font-size: var(--normal-size);
  font-style: italic;
  line-height: var(--body-line);
}
</style>
