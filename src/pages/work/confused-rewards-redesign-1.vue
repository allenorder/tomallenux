<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Building peace of mind: Designing the \'Reminders\' feature for Confused.com',
  description: 'Forget calendar reminders and sticky notes! Reminders are the automated way to know when your insurance is coming up for renewal—and statistically,…',
})
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[17, 11]">
      <FluidBlock d="2/5/8/14" m="2/2/6/10" :z="2">
        <TextBlock>
          <h2>Building Peace of Mind: Designing the 'Reminders' Feature for Confused.com</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/2/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Product design project</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="8/5/12/14" m="6/2/12/10" :z="3">
        <TextBlock>
          <p class="text-large">Forget calendar reminders and sticky notes! Reminders are the automated way to know when your insurance is coming up for renewal—and statistically, when you'll find the cheapest prices. <br /><br />This 6-month project explores how solving user-needs lead to an increase in retention by capturing key data points.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/11/25" m="12/2/18/10" :z="4" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13120-1.webp" fit="contain" eager />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[14, 4]">
      <FluidBlock d="1/5/2/8" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Project type</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/5/9" m="2/2/4/10" :z="2">
        <TextBlock>
          <p class="text-large">As part of my role as a Senior Product Designer at Confused.com.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/10/2/13" m="5/2/6/10" :z="2">
        <TextBlock>
          <h4>My role</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/10/5/14" m="6/2/8/10" :z="3">
        <TextBlock>
          <p class="text-large">Product designer. Responsible for the end-to-end design, research, UX, UI and content.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/2/18" m="9/2/11/10" :z="3">
        <TextBlock>
          <h4>Tools</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/4/19" m="10/2/12/10" :z="4">
        <TextBlock>
          <p class="text-large">Figma, Miro, Usertesting.com</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/20/2/23" m="12/2/14/10" :z="4">
        <TextBlock>
          <h4>Duration</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/20/5/24" m="13/2/15/10" :z="5">
        <TextBlock>
          <p class="text-large">Project completed between June 2024- December 2024</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[17, 9]">
      <FluidBlock d="1/5/3/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Project overview</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/10/14" m="4/2/14/10" :z="4">
        <TextBlock>
          <p class="text-large">At Confused.com, we knew our existing reminder system had a problem. We would use a user’s renewal date to send them email reminders before their insurance was due, but it operated behind the scenes, leaving users powerless. Users couldn't edit incorrect dates, stop unwanted reminders, or knowingly create reminders for other products.<br /><br />But this wasn't just a user frustration; it was a missed opportunity. Renewal dates are gold for increasing retention &amp; product density, and we were leaving valuable data on the table.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/4/13" m="3/2/5/10" :z="2">
        <TextBlock>
          <h4>The challenge:</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/15/10/24" m="15/2/18/10" :z="7">
        <TextBlock>
          <p class="text-large">Transform this passive system into an empowering tool. Design a new feature that would allow users to view, edit, and create reminders effortlessly, while also encouraging them to share more renewal dates for other household products. <br /><br />This meant aligning key channels (eCRM, app, portal), exploring new reminder methods, boosting retention, and driving product density.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/4/24" m="14/2/16/10" :z="6">
        <TextBlock>
          <h4>My mission:</h4>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[68, 36]">
      <FluidBlock d="1/5/3/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2><span class="highlight">Discovery phase</span></h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/6/14" m="3/2/6/10" :z="3">
        <TextBlock>
          <p class="text-large">Before starting any design work, we undertook a thorough discovery phase to define the problem. This comprised of 3 elements:</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/5/19/15" m="6/2/22/10" :z="4">
        <TextBlock bg="var(--white)" padding="6%" :radius="5">
          <h4><strong>1. Technical discovery</strong></h4>
          <p class="text-large">The Product Owner and I led several technical discovery sessions. Bringing together technical leads from different teams to highlight any potential hurdles. This involved:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Scoping and integration</strong>: We mapped the integration points between our eCRM platform (Braze), customer app, and customer account. This ensured we could start work to design a solution with key user-touch points sharing data.</p>
            </li>
            <li>
              <p class="text-large"><strong>Data analysis</strong>: We uncovered inconsistencies in our existing data, particularly with renewal dates captured through marketing campaigns.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="6/15/19/24" m="22/2/38/10" :z="5">
        <TextBlock bg="var(--white)" padding="6%" :radius="5">
          <h4><strong>2. Analysis of customer support feedback</strong></h4>
          <p class="text-large">As we had an existing feature, I explored customer feedback to understand the limitations of our current solution:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Frustration with unstoppable reminders</strong>: Users were deeply frustrated by their inability to stop reminders, particularly when their circumstances changed. <span class="highlight"><span class="sqsrte-text-color--darkAccent"><strong>"We have not owned this car for nearly 3 years!!" </strong></span></span></p>
            </li>
            <li>
              <p class="text-large"><strong>Confusion with uneditable dates</strong>: Users were confused and frustrated when they couldn't correct inaccurate renewal dates.<br /><span class="highlight"><strong>"My house insurance is in March, kindly unsubscribe me from your list." </strong></span></p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="19/5/37/24" m="38/2/68/10" :z="5">
        <TextBlock bg="var(--white)" padding="6%" :radius="5">
          <h4><strong>3. Customer research &amp; interviews: Uncovering core user needs</strong></h4>
          <p class="text-large">I led 10 user interview sessions through UserTesting.com to learn more. I focused on:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Current experiences</strong>: I explored users' existing processes for managing insurance renewals to highlight any point of frustration. This revealed a reliance on reminders as a trigger for action: <em>"I don’t really remember until the email comes through".</em></p>
            </li>
            <li>
              <p class="text-large"><strong>Feature opportunity</strong>: I asked users what features would make a reminder system most valuable, revealing their desire for control &amp; personalisation.</p>
            </li>
          </ul>
          <p class="text-large">Key problems &amp; opportunities:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Lack of trust in insurer prices</strong>: Participants did not trust in the renewal prices offered by their existing insurers, presenting an opportunity for Confused.com to position itself as a trusted, independent platform.</p>
            </li>
            <li>
              <p class="text-large"><strong>Desire to speed up comparison</strong>: Users wanted reminders to help them compare new prices, rather than do it all for them.</p>
            </li>
            <li>
              <p class="text-large"><strong>Misconceptions about insurance prices</strong>: Participants were generally unaware of the statistically cheapest time to shop for insurance, often guessing it was around 30 days before renewal. This insight presented a key selling point for our feature as we could notify them at the ‘cheapest’ time to find insurance.</p>
            </li>
            <li>
              <p class="text-large"><strong>Everything in one place</strong>: Users had a desire to manage everything in one place, with a clear view of what tasks they have coming up. </p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[26, 11]">
      <FluidBlock d="3/5/11/14" m="3/2/15/10" :z="4">
        <TextBlock>
          <p class="text-large">Armed with these insights, I moved onto design. </p>
          <p class="text-large">I started by transforming key problems into "How Might We..." questions, this meant I could focus on the problems rather than jumping to solutions. This highlighted the key area to start designing, the customer account dashboard.</p>
          <p class="text-large">Then, I explored four initial UI concepts through pencil sketches, refining two ideas into mid-fidelity designs.</p>
          <p class="text-large">From here I could flesh out more detailed user flows, focusing on key tasks, such as stopping &amp; editing reminders. </p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/3/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Exploring solutions</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/9/21" m="15/2/21/10" :z="5" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13122.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="6/19/12/25" m="21/2/27/10" :z="6" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13121.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[18, 12]">
      <FluidBlock d="1/5/4/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Aligning product teams and data</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/9/14" m="3/2/11/10" :z="2">
        <TextBlock>
          <p class="text-large">Once we had a clearer understanding of the user flow, we aligned with product teams to define a robust approach for managing renewal dates in the backend. </p>
          <p class="text-large">This included discussions around how potential design changes affected key touchpoints (emails, app, and customer portal) and allowed us to highlight technical constraints.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/15/12/24" m="11/2/19/10" :z="3">
        <TextBlock>
          <p class="text-large">We ran collaborative sessions using wireframes to map out solutions to key challenges:</p>
          <ul>
            <li>
              <p class="text-large">Are there any technical issues with implementing these wireframes?</p>
            </li>
            <li>
              <p class="text-large">How should conflicting existing dates be handled?</p>
            </li>
            <li>
              <p class="text-large">How are renewal dates updated as new data is received?</p>
            </li>
            <li>
              <p class="text-large">Where should renewal dates be stored?</p>
            </li>
            <li>
              <p class="text-large">What’s needed to support this consistently in emails?</p>
            </li>
          </ul>
          <p class="text-large">Working cross-functionally helped us align quickly and begin the backend work needed to deliver a scalable solution.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[22, 20]">
      <FluidBlock d="1/5/4/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Validation: Putting the design to the test</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/21/14" m="3/2/11/10" :z="2">
        <TextBlock>
          <p class="text-large">I then led ten remote usability tests using UserTesting.com. I set four tasks for participants to complete as they navigated through the prototype I’d created. This identified areas for improvement:</p>
          <ul>
            <li>
              <p class="text-large"><strong>Communicating benefits</strong>: Users needed clearer messaging about the feature's value upfront. Participants would only see the value in creating a reminders after they’d set one up. "The thought of having all of my insurance quotes, reminders, dates, information in one place is actually quite appealing," one participant noted, highlighting the need for stronger upfront communication.</p>
            </li>
            <li>
              <p class="text-large"><strong>Providing context</strong>: During reminder creation, users wanted more information about why they needed to enter certain pieces of information – revealing the need to communicate why this benefits them.</p>
            </li>
            <li>
              <p class="text-large"><strong>Expanding reminder channels</strong>: Participants wanted multiple reminders, across different channels. Emails weren’t enough. This led us to integrate insurance reminders into SMS and push notifications.</p>
            </li>
          </ul>
          <p class="text-large">These insights allowed me to return to the designs and make a host of changes before handing the designs over to the developers.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/12/22" m="11/2/17/10" :z="3" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/screenshot-2025-02-26-at-15-24-23-1.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="12/15/19/22" m="17/2/23/10" :z="4" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/screenshot-2025-02-26-at-15-23-48-1.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[36, 24]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Final designs</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/15/17" m="3/2/9/10" :z="2" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13118.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="15/9/24/13" m="9/6/15/11" :z="4" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13113.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="15/4/24/9" m="9/2/15/5" :z="3" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13112.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="15/13/24/17" m="15/2/21/10" :z="5" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/group-13117.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="4/18/24/22" m="21/2/37/10" :z="6" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign-1/dashboard-desktop-quotes-reminders-mobile-14.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="black">
    <FluidGrid :rows="[24, 12]">
      <FluidBlock d="1/5/3/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Results</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/10/11" m="3/2/10/10" :z="5">
        <TextBlock bg="var(--dark-accent)" padding="6%">
          <h4><span class="text-white">Product Density: </span></h4>
          <h4><span class="text-white">1 in every 3 users that create a reminder go on to add dates for other products, significantly expanding our renewal date database.</span></h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/11/10/17" m="10/2/18/10" :z="4">
        <TextBlock bg="var(--dark-accent)" padding="6%">
          <h4><span class="text-white">Retention: </span></h4>
          <h4><span class="text-white">The new feature now manages over 600,000 individual insurance renewal dates, allowing Confused.com to contact each customer during the buying cycle.</span></h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/17/10/23" m="18/2/23/10" :z="3">
        <TextBlock bg="var(--dark-accent)" padding="6%">
          <h4><span class="text-white">Platform Consistency: </span></h4>
          <h4><span class="text-white">The feature was seamlessly integrated into the Confused.com app. With systems in place to align renewal dates as we received more accurate data.</span></h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="12/5/13/23" m="24/2/25/10" :z="6" valign="center">
        <LineBlock />
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
