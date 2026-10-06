<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'CV',
  description: 'The CV of Tom Allen, Senior Product Designer.',
})
</script>

<template>
  <PageSection theme="light">
    <FluidGrid :rows="[12, 19]">
      <FluidBlock d="1/5/19/14" m="1/2/7/10" :z="1" valign="center">
        <ImageBlock src="/images/pagecv/tallen-cv-1.webp" alt="Tom Allen’s CV" fit="contain" eager />
      </FluidBlock>
      <FluidBlock d="4/16/11/21" m="7/2/13/10" :z="2" valign="center">
        <ImageBlock src="/images/pagecv/ta-headshot-2.webp" alt="Tom Allen" shape="circle" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
