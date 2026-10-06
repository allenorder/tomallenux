<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Contact us redesign',
  description: 'A UX review and complete redesign of a contact form, help centre and FAQs.',
})
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[15, 9]">
      <FluidBlock d="2/5/7/14" m="2/2/6/10" :z="2">
        <TextBlock>
          <h2>Contact form and information suite redesign</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/2/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Product design project</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="7/5/9/14" m="6/2/10/10" :z="3">
        <TextBlock>
          <p>A UX review and complete redesign of a contact form, help centre and FAQs. </p>
          <p>Making it easier for our users to get the answers they need, while reducing the amount of customer queries our customer support team see daily.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/10/24" m="10/2/16/10" :z="4" valign="center">
        <ImageBlock src="/images/contact-us-redesign/2group-13041.webp" fit="contain" eager />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[13, 3]">
      <FluidBlock d="1/5/2/8" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Project type</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/4/9" m="2/2/4/10" :z="2">
        <TextBlock>
          <p class="text-large">As part of my role as a product designer at Confused.com.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/10/2/13" m="5/2/7/10" :z="2">
        <TextBlock>
          <h4>My role</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/10/3/14" m="6/2/8/10" :z="3">
        <TextBlock>
          <p class="text-large">Primary designer, UX and UI.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/2/18" m="8/2/10/10" :z="3">
        <TextBlock>
          <h4>Tools</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/3/19" m="9/2/11/10" :z="4">
        <TextBlock>
          <p class="text-large">Figma</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/20/2/23" m="11/2/13/10" :z="4">
        <TextBlock>
          <h4>Duration</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/20/4/24" m="12/2/14/10" :z="5">
        <TextBlock>
          <p class="text-large">Designs completed between July 2021-Sept 2021</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[16, 10]">
      <FluidBlock d="1/5/3/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>The problem</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/6/13" m="4/2/7/10" :z="4">
        <TextBlock>
          <p class="text-large">Confused.com users need answers to their queries quickly so they can continue comparing or buying insurance.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/4/14" m="3/2/5/10" :z="2">
        <TextBlock>
          <h4>User problem</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="7/5/9/13" m="8/2/11/10" :z="7">
        <TextBlock>
          <p class="text-large">The customer support team need a more effective contact process to reduce the number of customer queries coming through to them.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/5/7/14" m="7/2/9/10" :z="6">
        <TextBlock>
          <h4>Business problem</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="10/5/11/23" m="11/2/12/10" :z="8" valign="center">
        <LineBlock />
      </FluidBlock>
      <FluidBlock d="1/14/3/23" m="12/2/14/10" :z="3">
        <TextBlock>
          <h2>The solution</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/14/7/22" m="14/2/17/10" :z="5">
        <TextBlock>
          <p class="text-large">Redesign the contact form, help centre and FAQ pages to help users self serve when they’re looking for answers.</p>
          <p class="text-large">Ensure answers to simple questions are easy to find and remove the need for users to get in touch and wait 2-3 days for a response. </p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[18, 10]">
      <FluidBlock d="1/5/3/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Research</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/5/13" m="3/2/7/10" :z="3">
        <TextBlock>
          <p class="text-large">Research was comprised of 3 sections, <strong>user research</strong>, <strong>competitor research</strong> &amp; <strong>feedback from our customer support team</strong>. The research led to some key findings:</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/5/11/11" m="7/2/11/10" :z="4">
        <TextBlock padding="6%">
          <p class="text-large"><strong>User research</strong> showed users were frustrated by:</p>
          <ul>
            <li>
              <p>How difficult it was to find the correct way to contact us.</p>
            </li>
            <li>
              <p>The time they needed to wait for a response to simple questions.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/12/11/18" m="11/2/15/10" :z="5">
        <TextBlock padding="6%">
          <p class="text-large"><strong>Competitor research</strong> revealed:</p>
          <ul>
            <li>
              <p>Many competitors would only display FAQs, with no way to directly contact customer support. </p>
            </li>
            <li>
              <p>We had an opportunity to provide an improved experience.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/19/11/25" m="15/2/19/10" :z="6">
        <TextBlock padding="6%">
          <p class="text-large"><strong>Customer support feedback</strong> showed:</p>
          <ul>
            <li>
              <p>Users would get in contact with common questions daily.</p>
            </li>
            <li>
              <p>We’d use a template response to respond to these questions which would take a lot of unnecessary time.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[38, 18]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>The current design: Usability issues</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/6/13" m="4/2/7/10" :z="3">
        <TextBlock>
          <p class="text-large">I then analysed our current contact form &amp; FAQ pages, highlighting any usability issues that we would fix in our redesign: to each set of FAQs.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/5/18/13" m="7/2/23/10" :z="4">
        <TextBlock>
          <ol>
            <li>
              <p class="text-large"><strong>The contact form was hidden</strong> at the bottom of a long page of FAQs. </p>
            </li>
            <li>
              <p class="text-large"><strong>The heading</strong> (‘What’s your query about?’) <strong>was small</strong> and didn’t make it obvious that this was a contact form.</p>
            </li>
            <li>
              <p class="text-large"><strong>The FAQ accordions are open on load</strong>, making the page longer.</p>
            </li>
            <li>
              <p class="text-large"><strong>Users would see 2 email addresses before they get to the form. </strong>Neither email address was used for customer questions and could cause the user to contact an incorrect email address.</p>
            </li>
            <li>
              <p class="text-large"><strong>The FAQs featured are not particularly helpful</strong> and didn’t line up with the most common questions our customer support team would answer. </p>
            </li>
            <li>
              <p class="text-large"><strong>Our FAQ groups, featured on a different page, were not clearly grouped</strong> and there was no clear navigation to each set of FAQs.</p>
            </li>
          </ol>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/19/22" m="23/2/39/10" :z="4" valign="center">
        <ImageBlock src="/images/contact-us-redesign/old-contact-https-www-confused-com-help-contact-us.webp" alt="Confused.com Contact us page - before the redesign" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[35, 17]">
      <FluidBlock d="3/5/17/13" m="3/2/22/10" :z="2">
        <TextBlock>
          <p class="text-large">I then started creating basic wireframes to solve the problems that came out of the research and usability assessment. </p>
          <p class="text-large"><strong>During this process we found that we could include helpful information within the contact form itself. </strong>This would help users get quick answers to common questions while reducing the amount of questions coming through to our customer support team. </p>
          <p class="text-large">Users would select the subject of their query and what they were having a problem with and we would show some information to help them with that topic. I used content design to improve hundreds of pieces of information, to make sure we’re providing the information our users need in the right way. </p>
          <p class="text-large">I then developed this idea into increasing levels of fidelity, while moving the design into our new design patterns. </p>
          <p class="text-large">It was important that we designed the contact form in such a way that the helpful information didn’t slow down users with complex queries. Users can still get in touch if the information didn’t answer their question.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/3/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Contact form redesign</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/16/22" m="23/2/36/10" :z="3" valign="center">
        <ImageBlock src="/images/contact-us-redesign/contact-us-subject-help-selected.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[24, 14]">
      <FluidBlock d="1/5/3/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Help centre redesign</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/10/13" m="3/2/11/10" :z="2">
        <TextBlock>
          <p class="text-large">I then focused on redesigning the help centre page to help users find FAQs, guides and helpful information. </p>
          <p class="text-large">Navigating between the groups of FAQs was a key issue, using a dropdown the choose the topic allowed us to display all of our FAQs on one page, rather than 10 separate pages. </p>
          <p class="text-large">I also rewrote all of our site FAQs and used content design to ensure there’s a consistent language throughout each piece of information.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/15/22" m="12/2/25/10" :z="3" valign="center">
        <ImageBlock src="/images/contact-us-redesign/help-centre-1.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[25, 26]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Final designs</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/13/16/25" m="3/2/9/10" :z="4" valign="center">
        <ImageBlock src="/images/contact-us-redesign/we-ve-got-your-messagedevice-macbook-pro.webp" alt="Laptop mock up that shows the confirmation screen, after a user has got in touch" fit="contain" />
      </FluidBlock>
      <FluidBlock d="4/5/25/11" m="9/2/26/10" :z="3" valign="center">
        <ImageBlock src="/images/contact-us-redesign/contact-us-still-need-to-get-in-touch-yes.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
