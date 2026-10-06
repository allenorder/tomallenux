<script setup lang="ts">
/** One project on the My work page: title, summary, button, thumbnail and a dividing line. */
import { computed } from 'vue'
import { DEFAULT_LAYOUT, type Project } from '@/data/projects'

const props = defineProps<{ project: Project; eager?: boolean }>()
const layout = computed(() => props.project.layout ?? DEFAULT_LAYOUT)
</script>

<template>
  <PageSection>
    <FluidGrid :rows="layout.rows" :gap="0">
      <FluidBlock :d="layout.title[0]" :m="layout.title[1]" :z="1">
        <TextBlock>
          <h3 v-html="project.title" />
        </TextBlock>
      </FluidBlock>
      <FluidBlock :d="layout.summary[0]" :m="layout.summary[1]" :z="2">
        <TextBlock>
          <p class="text-large" v-html="project.summary" />
        </TextBlock>
      </FluidBlock>
      <FluidBlock
        v-if="project.slug && !project.comingSoon"
        :d="(layout.button ?? DEFAULT_LAYOUT.button!)[0]"
        :m="(layout.button ?? DEFAULT_LAYOUT.button!)[1]"
        :z="4"
        valign="center"
      >
        <ButtonBlock :to="`/${project.slug}`">{{ project.buttonLabel ?? 'View project' }}</ButtonBlock>
      </FluidBlock>
      <FluidBlock :d="layout.image[0]" :m="layout.image[1]" :z="5" valign="center">
        <ImageBlock
          :src="project.image"
          :fit="project.imageFit ?? 'contain'"
          :radius="project.imageRadius"
          :to="project.imageLink"
          :eager="eager"
        />
      </FluidBlock>
      <FluidBlock :d="layout.line[0]" :m="layout.line[1]" :z="3" valign="center">
        <LineBlock />
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
