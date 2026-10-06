<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'About',
  description: 'A product designer from Bristol with a background in content design and UX writing.',
})
</script>

<template>
  <PageSection>
    <FluidGrid :rows="[22, 14]">
      <FluidBlock d="1/5/12/16" m="1/2/18/10">
        <TextBlock>
          <p class="text-large"><em>About</em></p>
          <h3><em>Hi, I’m Tom</em></h3>
          <p class="text-large">A product designer from Bristol with a background in content design and UX writing.</p>
          <p class="text-large">In 2019, I made the decision to swap my career in digital marketing for a role in UX. After completing a year training in UX design I started as a content designer at Confused.com and my role quickly changed to product designer – and I haven’t looked back since. </p>
          <p class="text-large">I’m a process-driven designer that will advocate for the user and make data-led decisions. </p>
          <p class="text-large">But it’s not all work, I am also an amateur artist, photographer and footballer.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/16/2/24" m="18/2/19/10" :z="1" valign="center">
        <LineBlock />
      </FluidBlock>
      <FluidBlock d="14/5/15/23" m="20/2/21/10" :z="2" valign="center">
        <LineBlock />
      </FluidBlock>
      <FluidBlock d="12/5/14/9" m="21/2/23/10" :z="3" valign="center">
        <ButtonBlock to="/pagecv">See my CV</ButtonBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection height="auto">
    <GalleryMasonry
      :items="[
        { src: '/images/about/45e0a690-a20f-4817-906d-3d8584279d24.webp', caption: 'A shot from the President\'s cup final in 2019... don\'t ask about the result.' },
        { src: '/images/about/img-2120.webp', caption: 'Painting from 2019.' },
        { src: '/images/about/dsc-0279.webp', caption: 'Ankor Wat, Cambodia' },
        { src: '/images/about/dsc-1106.webp', caption: 'Phu Quoc, Vietnam' },
        { src: '/images/about/8a79d4c0-bd81-4b65-bac3-79f6fc27df74.webp' },
      ]"
    />
  </PageSection>
</template>
