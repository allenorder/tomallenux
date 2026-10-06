<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Car insurance landing page',
  description: 'A complete rewrite and redesign of the most visited SEO page on Confused.com.',
})
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[12, 8]">
      <FluidBlock d="1/5/2/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Content design project</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/7/13" m="3/2/5/10" :z="2">
        <TextBlock>
          <h2>Car insurance landing page rewrite and redesign</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/14/9/25" m="5/2/11/10" :z="3" valign="center">
        <ImageBlock src="/images/car-insurancelanding-page/2roup-13043.webp" fit="contain" eager />
      </FluidBlock>
      <FluidBlock d="7/5/9/11" m="11/2/13/10" :z="2">
        <TextBlock>
          <p class="text-large">A complete rewrite and redesign of the most visited SEO page on Confused.com.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[5, 5]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="2">
        <TextBlock>
          <h2>My role</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/5/14" m="3/2/5/10" :z="3">
        <TextBlock>
          <p class="text-large">I worked as the sole content designer on the project. Collaborating closely with the SEO team and front-end developers to ensure the page hit our conversion goals and accessibility guidelines.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[9, 8]">
      <FluidBlock d="2/5/4/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Project goals</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/9/14" m="3/2/5/10" :z="2">
        <TextBlock>
          <ol>
            <li>
              <p class="text-large"><strong>Redesign the page and the content</strong>. Using our new design patterns and language styles.</p>
            </li>
            <li>
              <p class="text-large"><strong>Improve the lighthouse score</strong> of the page by focusing on accessibility, SEO &amp; the presentation of information.</p>
            </li>
            <li>
              <p class="text-large"><strong>Increase conversion</strong> and follow SEO best practices to optimise the page in the eyes of Google.</p>
            </li>
          </ol>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/14/4/23" m="5/2/7/10" :z="2">
        <TextBlock>
          <h2>Key considerations</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/14/9/23" m="7/2/9/10" :z="3">
        <TextBlock>
          <p class="text-large">The data showed 90% of users would not scroll further than 25% of the page. And 60% of users would click on the main CTA in the hero. </p>
          <p class="text-large">Users primarily value the time taken to get a quote &amp; the price the quote. These points should dictate the order of the content.</p>
          <p class="text-large">We should also prioritise trust and brand familiarity.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[22, 11]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>The redesign</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/10/13" m="3/2/9/10" :z="2" valign="center">
        <ImageBlock src="/images/car-insurancelanding-page/before-car-insurance-screencapture-confused-car-insurance-2021-06-23-17-44-30.webp" />
      </FluidBlock>
      <FluidBlock d="3/5/4/11" m="9/2/11/10" :z="2">
        <TextBlock>
          <h4>The old design</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/14/4/20" m="11/2/13/10" :z="3">
        <TextBlock>
          <h4>The redesign</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="10/5/12/9" m="13/2/15/10" :z="4" valign="center">
        <ButtonBlock to="">View full old page</ButtonBlock>
      </FluidBlock>
      <FluidBlock d="4/14/10/22" m="15/2/21/10" :z="3" valign="center">
        <ImageBlock src="/images/car-insurancelanding-page/before-car-insurance-screencapture-confused-car-insurance-2021-06-23-17-44-30.webp" />
      </FluidBlock>
      <FluidBlock d="10/14/12/19" m="21/2/23/10" :z="5" valign="center">
        <ButtonBlock to="">View full redesign page</ButtonBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[8, 6]">
      <FluidBlock d="1/5/3/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Key improvements</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/4/13" m="3/2/5/10" :z="2">
        <TextBlock>
          <h4>Hero section</h4>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[6, 8]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Impact</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/4/11" m="3/2/5/10" :z="2">
        <TextBlock>
          <h4>Lighthouse score</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/9/13" m="5/2/7/10" :z="3">
        <TextBlock>
          <p class="text-large">Moving the page into the new design style has resulted in the lighthouse score improving by 14% on mobile &amp; 25% on desktop. </p>
          <h3>SHOUT OUT TO THE OTHER TEAMS?!</h3>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
