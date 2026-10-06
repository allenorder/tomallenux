<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Pet insurance comparison journey',
  description: 'Pet insurance is needlessly complex. With four cover types, each featuring unique rules, limits, and exclusions; it\'s difficult to know what your pets…',
})
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[17, 10]">
      <FluidBlock d="6/5/11/14" m="5/2/11/10" :z="3">
        <TextBlock>
          <p class="text-large">Pet insurance is needlessly complex. With four cover types, each featuring unique rules, limits, and exclusions; it's difficult to know what your pets are truly covered for. This project sought to revamp our comparison journey, simplifying these intricacies and providing the information needed to for anyone to make a confident buying decision.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/6/14" m="2/2/6/10" :z="2">
        <TextBlock>
          <h2><strong>Pet Insurance: Simplifying a journey</strong></h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/2/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Product design project</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/10/26" m="11/2/18/10" :z="4" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/top-image.webp" alt="An image of 2 phones with screens from the confused.com pet insurance comparison journey" fit="contain" eager />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[13, 4]">
      <FluidBlock d="1/5/2/8" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Project type</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/5/9" m="2/2/4/10" :z="2">
        <TextBlock>
          <p class="text-large">As part of my role as a Product Designer at Confused.com.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/10/2/13" m="5/2/7/10" :z="2">
        <TextBlock>
          <h4>My role</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/10/5/14" m="6/2/8/10" :z="3">
        <TextBlock>
          <p class="text-large">Product and Content designer, in a team of two designers.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/2/18" m="8/2/10/10" :z="3">
        <TextBlock>
          <h4>Tools</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/3/19" m="9/2/11/10" :z="4">
        <TextBlock>
          <p class="text-large">Figma, UserZoom</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/20/2/23" m="11/2/13/10" :z="4">
        <TextBlock>
          <h4>Duration</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/20/5/24" m="12/2/14/10" :z="5">
        <TextBlock>
          <p class="text-large">Project completed between June 2023- Aug 2023</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[25, 16]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Understanding the problem</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/7/14" m="4/2/6/10" :z="5">
        <TextBlock>
          <p class="text-large">Our analysis of the existing pet insurance journey revealed some key problems:</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="7/5/17/14" m="7/2/20/10" :z="6">
        <TextBlock>
          <ul>
            <li>
              <p class="text-large"><strong>Lack of clarity between different types of cover</strong>. Users struggled to comprehend distinctions between the three types of pet insurance cover.</p>
            </li>
            <li>
              <p class="text-large"><strong>Overuse of insurance jargon</strong>. Frequent use of complex insurance terminology created a barrier for users.</p>
            </li>
            <li>
              <p class="text-large"><strong>Limited flexibility.</strong> The platform was designed to accommodate insuring one pet at a time, which contrasted with competitors' offerings. The list of dog/cat breeds was limited, leading to many users feeling like they were unable to get accurate cover.</p>
            </li>
            <li>
              <p class="text-large"><strong>Impersonal process</strong>. The pet insurance journey lacked personalisation, despite the deeply personal nature of pet care.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="7/15/11/24" m="20/2/23/10" :z="5">
        <TextBlock bg="rgba(223, 224, 225, 0.45)">
          <blockquote>
            <p class="text-large"><strong><em>“A lot of different types of cover… unfortunately it isn’t clear what’s what and how much how much the vet coverage is”</em></strong></p>
            <p><strong><em>- Confused.com Pet Insurance User</em></strong></p>
          </blockquote>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="12/15/16/24" m="23/2/26/10" :z="6">
        <TextBlock bg="rgba(223, 224, 225, 0.45)">
          <blockquote>
            <p class="text-large"><strong><em>“Sometimes the terminology is hard to understand and you need specific jargon busters”</em></strong></p>
            <p><strong><em>- Confused.com Pet Insurance User</em></strong></p>
          </blockquote>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[36, 21]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Ideation: Designing solutions</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/19/14" m="4/2/24/10" :z="4">
        <TextBlock>
          <p class="text-large">In the ideation phase, we focused on refining the user flow and design elements to address the identified issues. Here are the key highlights:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Streamlined user flow</strong>: We restructured the question set to prioritise the most-selected option (Lifetime cover was selected by over 90% of users).</p>
            </li>
            <li>
              <p class="text-large"><strong>Segmented question set</strong>: We divided the questions into three sections, rather than one long page, to prevent information overload.</p>
            </li>
            <li>
              <p class="text-large"><strong>Clarity on multi-pet policies</strong>: We created wireframes that communicated the ability to add multiple pets to a single policy, aligning with user expectations – the number of pets was moved to be the opening question. </p>
            </li>
            <li>
              <p class="text-large"><strong>Enhanced content</strong>: We overhauled the content to offer clear definitions and user-friendly breakdowns of cover types and other questions.</p>
            </li>
            <li>
              <p class="text-large"><strong>Design system integration</strong>: The journey was updated into our new design system, enhancing usability and consistency in form components.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/22/24" m="24/2/37/10" :z="5" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/new-ieation-min.webp" alt="An image showcasing before and after images of the Confused.com pet insurance journey" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[18, 23]">
      <FluidBlock d="1/5/4/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Testing the design: Survey plan &amp; results</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/24/14" m="3/2/11/10" :z="2">
        <TextBlock>
          <p class="text-large">Following the ideation phase, we proceeded to the testing stage, which was centered around refining the user experience in the section of the journey that posed the most challenges—understanding the nuances of three cover types: Lifetime cover, Maximum Benefit &amp; Time Limited. </p>
          <p class="text-large">Our primary goal was to gather quantitative data to test our solutions and new content.</p>
          <p class="text-large">To achieve this, we created a comprehensive survey that reached 250 participants. The survey was designed to gauge user confidence in understanding the questions, statements, and information within the question set. <br /><br /><strong>Survey Highlights</strong>: </p>
          <ul>
            <li>
              <p class="text-large">88% of participants said they were confident they understood the difference between the three types of cover.</p>
            </li>
            <li>
              <p class="text-large">89% of participants expressed confidence in understanding the statement regarding cover for pre-existing conditions.</p>
            </li>
          </ul>
          <p class="text-large"><strong>Areas for improvement:</strong></p>
          <ul>
            <li>
              <p class="text-large">Notably, some participants expressed a desire to read about all three cover types together, rather than separated across two questions.</p>
            </li>
            <li>
              <p class="text-large">Two participants highlighted the term "limit" as a potential point of confusion.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/15/23" m="11/2/19/10" :z="3">
        <ChartBlock
          :data="[{ label: 'Confident', value: 220 }, { label: 'Not confident', value: 30 }]"
          caption="Based on the questions and information provided. How confident are you that you understand the difference between the three cover types?"
        />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[45, 24]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Testing the design: Usability testing results</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/20/14" m="4/2/23/10" :z="2">
        <TextBlock>
          <p class="text-large">Following the survey, we ran usability testing sessions with 15 participants using a prototype of the redesigned flow. This phase aimed to gather qualitative data, assess design usability, and understand user interactions, especially with help text and new content.</p>
          <p class="text-large"><strong>Highlights:</strong></p>
          <ul>
            <li>
              <p class="text-large">All participants successfully chose pet insurance cover.</p>
            </li>
            <li>
              <p class="text-large">All participants expressed confidence in their cover selection.</p>
            </li>
            <li>
              <p class="text-large">12/15 participants used the help text and expressed that it assisted them in understanding the questions.</p>
            </li>
          </ul>
          <p class="text-large"><strong>Areas for improvement:</strong></p>
          <ul>
            <li>
              <p class="text-large">A participant suggested incorporating real-life scenarios would be helpful.</p>
            </li>
            <li>
              <p class="text-large">Another participant mentioned that they’d like to see the pros and cons of each cover type to help them compare.</p>
            </li>
          </ul>
          <p class="text-large">The usability testing phase provided actionable insights that further refined our design.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="21/5/23/14" m="23/2/25/10" :z="3">
        <TextBlock>
          <h4>Want to try it out? View the cover section of the prototype: (desktop only)</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="23/5/25/9" m="25/2/27/6" :z="8" valign="center">
        <ButtonBlock to="https://www.figma.com/proto/w6hAG1UtXXG6MtZprP4fMR/Pet-insurance?hide-ui=1&node-id=707-27848&page-id=707%3A27799&scaling=min-zoom&t=kloXX7C0R4X9Fx9W-8&type=design&viewport=446%2C484%2C0.28">View prototype</ButtonBlock>
      </FluidBlock>
      <FluidBlock d="5/15/11/24" m="28/2/36/10" :z="6">
        <TextBlock bg="rgba(255, 255, 255, 0.61)" padding="6%">
          <blockquote>
            <p class="text-large"><strong><em>“This point here about the average claim is really, really helpful and that actually informed my decision”</em></strong></p>
            <p><strong><em>- Usability testing participant 11</em></strong></p>
          </blockquote>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="12/15/19/24" m="37/2/45/10" :z="7">
        <TextBlock bg="rgba(255, 255, 255, 0.6)" padding="6%">
          <blockquote>
            <p class="text-large"><strong><em>“Might be nice to have a link to a specific breakdown that details all the good and bad things about each type”</em></strong></p>
            <p><strong><em>- Usability testing participant 4</em></strong></p>
          </blockquote>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[29, 18]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Refinements inspired by user insights</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/14/14" m="4/2/17/10" :z="2">
        <TextBlock>
          <p class="text-large">Driven by insights from survey and usability testing, we made several changes to the design:</p>
          <ol>
            <li>
              <p class="text-large">Usability testing pinpointed areas for subtle content adjustments.</p>
            </li>
            <li>
              <p class="text-large"> We introduced a comprehensive slide-out panel. This feature presents the advantages and disadvantages of each cover type upfront, offering users complete clarity before they begin answering questions. This section allowed users to compare all cover types in one place.</p>
            </li>
            <li>
              <p class="text-large">We also refined visual aspects of the journey. These changes emphasise the personal nature of pet care.</p>
            </li>
          </ol>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/19/23" m="17/2/30/10" :z="3" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/refinement-image-min.webp" alt="An image that shows a new drawer introduced to the design with more detailed explanations." fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[41, 30]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Final designs</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="12/5/26/13" m="3/2/15/10" :z="3" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/glamour-shots-2-min.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="4/14/26/18" m="15/6/30/11" :z="6" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/glamour-shots.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="4/18/29/23" m="15/2/30/6" :z="5" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/glamour-shots-5.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="4/5/12/13" m="31/2/37/10" :z="7" valign="center">
        <ImageBlock src="/images/confused-pet-insurance/gllamour-shots-4.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="27/5/29/14" m="38/2/40/10" :z="4">
        <TextBlock>
          <h4>Want to try it out? View the cover section of the prototype: (desktop only)</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="29/5/31/9" m="40/2/42/6" :z="9" valign="center">
        <ButtonBlock to="https://www.figma.com/proto/w6hAG1UtXXG6MtZprP4fMR/Pet-insurance?hide-ui=1&node-id=707-27848&page-id=707%3A27799&scaling=min-zoom&t=kloXX7C0R4X9Fx9W-8&type=design&viewport=446%2C484%2C0.28">View prototype</ButtonBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
