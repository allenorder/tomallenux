<script setup lang="ts">
/** Container for ClassicRow / ClassicCol layouts (12-column rows that stack on mobile). */
defineProps<{ narrow?: boolean }>()
</script>

<template>
  <div class="classic-layout" :class="{ narrow }">
    <slot />
  </div>
</template>
