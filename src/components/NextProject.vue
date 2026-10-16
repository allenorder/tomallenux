<script setup lang="ts">
/** End of a case study: a link to the next listed project. Works out the current page from the route. */
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { nextProject } from '@/data/projects'

const route = useRoute()
const next = computed(() => nextProject(route.path.replace(/^\/|\/$/g, '')))
</script>

<template>
  <Section tone="muted" class="next-project">
    <p class="eyebrow">Next project</p>
    <ProjectCard :project="next" featured :heading-level="2" />
  </Section>
</template>

<style>
.next-project .eyebrow + * {
  margin-top: 0;
}
</style>
