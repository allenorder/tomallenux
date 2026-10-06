<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Contact',
  description: 'Get in touch with Tom Allen, a Senior Product Designer from Bristol, UK.',
})
</script>

<template>
  <PageSection height="medium">
    <ClassicLayout narrow>
      <ClassicRow>
        <ClassicCol :span="5">
          <TextBlock>
            <p class="text-large"><em>Contact</em></p>
            <h3>Get in touch! ✌️</h3>
            <p>Bristol, UK</p>
          </TextBlock>
        </ClassicCol>
        <ClassicCol :span="7">
          <ContactForm />
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>
</template>
