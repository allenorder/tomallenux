<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Content design, The anatomy of a landing page',
  description: 'To dissect how I approach content design, I’ve broken down a page I rewrote and redesigned in 2022.  I’ll outline my process, review the impact content…',
})
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[15, 12]">
      <FluidBlock d="2/5/7/14" m="2/2/6/10" :z="2">
        <TextBlock>
          <h2>Content design: The anatomy of a landing page</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/2/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Content design</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="7/5/13/14" m="6/2/10/10" :z="3">
        <TextBlock>
          <p class="text-large">To dissect how I approach content design, I’ve broken down a page I rewrote and redesigned in 2022. I’ll outline my process, review the impact content can have on users and summarise the design decisions I made along the way. </p>
          <p class="text-large">The page I’m reviewing is the Confused.com car insurance landing page, the most visited page on the site. As it’s an SEO page, it’s content-heavy and the primary goal is to convince users to compare car insurance quotes.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/10/25" m="10/2/16/10" :z="4" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/group-17977.webp" fit="contain" eager />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[16, 14]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>How I approach content design</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/15/14" m="4/2/17/10" :z="4">
        <TextBlock>
          <p class="text-large">Content design is about giving the user information in the <strong>right way</strong> at the <strong>right time</strong>.</p>
          <p class="text-large">Context is everything. What has the user done to get here? What’s their goal? Is the change we’re making based on data, or a hunch?</p>
          <p class="text-large">When writing content I like to apply these rules:</p>
          <ul>
            <li>
              <p class="text-large">Make sure there’s a consistent tone.</p>
            </li>
            <li>
              <p class="text-large">Use the same wording end-to-end e.g. from email to web page.</p>
            </li>
            <li>
              <p class="text-large">Keep the primary goal in mind. What does the user need/want to do?</p>
            </li>
            <li>
              <p class="text-large">All key decisions should be data-led.</p>
            </li>
            <li>
              <p class="text-large">Display information in the clearest way, using the correct components.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[28, 13]">
      <FluidBlock d="1/5/3/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Tackling hero sections</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/14/14" m="3/2/18/10" :z="4">
        <TextBlock>
          <p class="text-large">As it has the largest impact, I’ll almost always spend the most time crafting the content in the hero section. In this example, 60% of users scrolled less than 10% of the page. 70% of active clicks used the main CTA in the hero. </p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Mirrored the search terms</strong> in the main headline to reassure the user they’ve landed on the correct page.</p>
            </li>
            <li>
              <p class="text-large"><strong>Included the main selling point</strong> in the headline ‘Save up to £X'</p>
            </li>
            <li>
              <p class="text-large"><strong>Made sure there’s additional reasons to buy</strong> with, including social proof, stats to back up our legitimacy, guarantee of a reward and line outlining the time it will take to reassure the user.</p>
            </li>
            <li>
              <p class="text-large"><strong>Descriptive labelling in the primary CTA</strong></p>
            </li>
            <li>
              <p class="text-large"><strong>Positive iconography</strong></p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/15/10/22" m="18/2/23/10" :z="4" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/frame-13534.webp" />
      </FluidBlock>
      <FluidBlock d="10/15/12/20" m="23/2/27/10" :z="5" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-14-at-17-31-1.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="12/15/13/23" m="27/2/29/10" :z="2">
        <TextBlock>
          <p>An example of the search terms, mirrored in the headline.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[44, 15]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Scannable headings and button labels</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/16/14" m="4/2/20/10" :z="2">
        <TextBlock>
          <p class="text-large"><strong>Users don’t read, they scan</strong>. </p>
          <p class="text-large">Headings, links and buttons are particularly noticeable in content so it’s important to use this content wisely. We need to make sure there’s a consistent tone running throughout the page, as if we’re having a conversation with the user.</p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Used consistent language</strong> in headings, in this case they’re all statements (rather than questions).</p>
            </li>
            <li>
              <p class="text-large"><strong>Paid attention to reading patterns</strong>, usually following an F-pattern – which focusses on the start of lines toward the top of the page (left-right languages).</p>
            </li>
            <li>
              <p class="text-large"><strong>Used descriptive labels for all button and links.</strong> I avoided content like ‘read more’ ‘click here’ ‘find out more’ as these are not accessible. Screen readers pick-up links so the link should make sense if you take everything else away.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="13/15/14/23" m="20/2/22/10" :z="4">
        <TextBlock>
          <p>Example of consistent headings and descriptive button &amp; link content.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/7/19" m="22/2/25/10" :z="5" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-18-01.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="7/15/9/18" m="25/2/30/10" :z="6" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-18-27.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="11/15/12/20" m="30/2/32/10" :z="7" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-46-59.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="9/19/11/23" m="32/2/36/10" :z="8" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-47-16.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="5/19/8/23" m="36/2/41/10" :z="9" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-47-34.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="9/15/11/19" m="41/2/45/10" :z="10" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-09-18-39.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[29, 15]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Developing the flow of the page</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/15/14" m="4/2/19/10" :z="2">
        <TextBlock>
          <p class="text-large">Naturally, SEO pages use a lot of content so we need to look at the order we display each module. It’s essential we look at the overall context of the page and our users and ask, what information is essential for the user to complete their task? And what’s the business goal?</p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Prioritised the most important sections</strong> for a user. In this case, user’s that scroll past the main CTA may need more information about ‘How to compare insurance’ so this information is available directly after the hero section.</p>
            </li>
            <li>
              <p class="text-large"><strong>Positioned content around key actions</strong> to improve the flow. ‘How to compare’ for example, leads nicely into a CTA as the user has now got the information they need. I also grouped certain sections as they’re directly related.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/14/22" m="19/2/28/10" :z="3" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-10-10-22.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="14/15/16/22" m="28/2/30/10" :z="4">
        <TextBlock>
          <p>Improving the flow of the page: ‘How to compare…’ leads nicely into a second CTA</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[30, 17]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Organising longer content</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/14/14" m="4/2/18/10" :z="2">
        <TextBlock>
          <p class="text-large">For longer content, it’s important to provide detailed and helpful information without overwhelming users. </p>
          <p class="text-large">What I did to improve the content:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Split long content into a separate module</strong>.</p>
            </li>
            <li>
              <p class="text-large"><strong>Kept content to</strong> <strong>less than</strong> <strong>350 words. </strong>Any longer and it can<strong> </strong>look cluttered.</p>
            </li>
            <li>
              <p class="text-large"><strong>Used two columns for content with a clear break</strong>.</p>
            </li>
            <li>
              <p class="text-large"><strong>Utilised bullets points</strong> where possible.</p>
            </li>
            <li>
              <p class="text-large"><strong>Front loaded paragraphs</strong> so users can scan and find the information they need without reading for too long.</p>
            </li>
            <li>
              <p class="text-large"><strong>Swapped words for more appropriate components</strong>, in this case a graph and bullets that use iconography.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/11/23" m="18/2/24/10" :z="4" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-10-32-03.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="11/15/17/23" m="24/2/29/10" :z="6" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/screenshot-2023-01-15-at-10-32-21.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="17/15/18/23" m="29/2/31/10" :z="3">
        <TextBlock>
          <p>Examples of longer content: Broken down into manageable sections.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[50, 91]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>The final result</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/92/22" m="3/2/51/10" :z="7" valign="center">
        <ImageBlock src="/images/content-design-the-anatomy-of-a-landing-page/desktop-min.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
