<script setup lang="ts">
/** Expandable list. Only one item is open at a time; the first starts open. */
import { ref, useId } from 'vue'

const props = withDefaults(
  defineProps<{
    /** `body` is HTML */
    items: { title: string; body: string }[]
    firstOpen?: boolean
  }>(),
  { firstOpen: true },
)

const id = useId()
const open = ref<number | null>(props.firstOpen ? 0 : null)
const toggle = (i: number) => (open.value = open.value === i ? null : i)
</script>

<template>
  <div class="accordion-block">
    <ul class="accordion">
      <li v-for="(item, i) in items" :key="i" class="accordion__item" :class="{ 'is-open': open === i }">
        <p class="accordion__heading">
          <button
            :id="`${id}-b${i}`"
            class="accordion__button"
            :aria-expanded="open === i"
            :aria-controls="`${id}-p${i}`"
            @click="toggle(i)"
          >
            <span class="accordion__title">{{ item.title }}</span>
            <span class="accordion__icon" aria-hidden="true" />
          </button>
        </p>
        <div
          v-show="open === i"
          :id="`${id}-p${i}`"
          class="accordion__panel rte"
          role="region"
          :aria-labelledby="`${id}-b${i}`"
          v-html="item.body"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.accordion {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}
.accordion__item {
  border-bottom: 1px solid var(--line);
}
.accordion__heading {
  margin: 0;
  font-size: var(--large-size);
  line-height: var(--body-line);
}
.accordion__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0 15px;
  border: 0;
  background: none;
  color: var(--text);
  font: inherit;
  line-height: normal;
  text-align: left;
  cursor: pointer;
}
.accordion__title {
  padding-right: 14px;
}
.accordion__icon {
  position: relative;
  flex: 0 0 14px;
  width: 14px;
  height: 14px;
}
.accordion__icon::before,
.accordion__icon::after {
  content: '';
  position: absolute;
  background: currentColor;
  transition: transform 0.2s ease;
}
.accordion__icon::before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
}
.accordion__icon::after {
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
}
.is-open .accordion__icon::after {
  transform: scaleY(0);
}
.accordion__panel {
  padding: 0 0 30px;
}
</style>
