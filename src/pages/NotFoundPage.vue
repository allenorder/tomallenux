<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { usePageMeta } from '@/lib/meta'

usePageMeta({ title: 'Page not found' })
useHead({ meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[6, 6]">
      <FluidBlock d="1/5/4/17" m="1/2/4/10">
        <TextBlock>
          <h2>Page not found</h2>
          <p class="text-large">Sorry, we couldn’t find the page you were looking for.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/7/10" m="5/2/7/10" valign="center">
        <ButtonBlock to="/">Back to home</ButtonBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
