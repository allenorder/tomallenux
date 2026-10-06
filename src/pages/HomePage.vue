<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Tom Allen',
  description: 'Tom Allen is a Senior Product Designer from Bristol, UK, with experience in UX, UI and content design.',
})
</script>

<template>
  <PageSection align="top">
    <FluidGrid :rows="[20, 12]">
      <FluidBlock d="2/15/12/22" m="1/2/11/10" valign="center">
        <ImageBlock src="/images/home/ta-headshot-2-copy.webp" alt="Tom Allen" :radius="25" eager />
      </FluidBlock>
      <FluidBlock d="2/5/4/14" m="12/2/14/10" :z="1">
        <TextBlock>
          <h2>Hi, I’m Tom 👋</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/11/14" m="14/2/19/10" :z="2">
        <TextBlock>
          <h2>I’m a <strong>Senior</strong> <strong>Product Designer</strong> from Bristol, UK.</h2>
          <h4>I’m a user focused designer with experience in <strong>UX, UI </strong>and <strong>content design</strong>.</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="11/5/13/10" m="19/2/21/6" :z="3" valign="center">
        <ButtonBlock to="/mywork">View my work</ButtonBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="bright-inverse">
    <!-- empty section carried over from the original site -->
  </PageSection>
</template>
