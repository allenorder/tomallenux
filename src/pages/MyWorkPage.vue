<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'
import { projects } from '@/data/projects'

usePageMeta({
  title: 'Product design',
  description: 'Product design case studies by Tom Allen, a Senior Product Designer from Bristol, UK.',
})
</script>

<template>
  <PageSection>
    <FluidGrid :rows="[2, 4]">
      <FluidBlock d="1/5/5/17" m="1/2/3/10" :z="1">
        <TextBlock>
          <h1><strong>Product Design Case Studies</strong></h1>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <ProjectRow v-for="(project, i) in projects" :key="project.title" :project="project" :eager="i === 0" />
</template>
