<script setup lang="ts">
/** A column `span` twelfths wide. Holds blocks or nested ClassicRows. */
defineProps<{ span: number }>()
</script>

<template>
  <div class="classic-col" :style="{ '--span': span }">
    <slot />
  </div>
</template>
