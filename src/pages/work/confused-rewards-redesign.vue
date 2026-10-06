<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Rewards, UX design',
  description: 'A 5-month product design project, working in a large team to expand an existing rewards scheme &amp; integrate the offer into a mobile app.',
})
</script>

<template>
  <PageSection height="medium">
    <FluidGrid :rows="[15, 10]">
      <FluidBlock d="8/5/11/14" m="5/2/10/10" :z="3">
        <TextBlock>
          <p class="text-large">A 5-month product design project, working in a large team to expand an existing rewards scheme &amp; integrate the offer into a mobile app.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/8/14" m="2/2/6/10" :z="2">
        <TextBlock>
          <h2>Confused.com Rewards: Improving retention by optimising a marketing proposition</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/5/2/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>Product design project</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/10/25" m="10/2/16/10" :z="4" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/header-image.webp" alt="Two phones displaying a rewards offer on Confused.com" fit="contain" eager />
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
          <p class="text-large">As part of my role as a product designer at Confused.com.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/10/2/13" m="5/2/7/10" :z="2">
        <TextBlock>
          <h4>My role</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/10/4/14" m="6/2/8/10" :z="3">
        <TextBlock>
          <p class="text-large">Product designer, in a team of two designers.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/2/18" m="8/2/10/10" :z="3">
        <TextBlock>
          <h4>Tools</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/3/19" m="9/2/11/10" :z="4">
        <TextBlock>
          <p class="text-large">Figma, Miro, UserZoom</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/20/2/23" m="11/2/13/10" :z="4">
        <TextBlock>
          <h4>Duration</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/20/5/24" m="12/2/14/10" :z="5">
        <TextBlock>
          <p class="text-large">Project completed between June 2022- Oct 2022</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="white-bold">
    <FluidGrid :rows="[11, 10]">
      <FluidBlock d="1/5/3/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Where did we start?</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/10/14" m="3/2/6/10" :z="4">
        <TextBlock>
          <p class="text-large">When the project started, Confused.com Rewards was a simple offer:<br /><br /><strong><em>Choose a reward when you buy car, home or van insurance with Confused.com.</em></strong><em><br /><br /></em>The user could return to Confused.com after buying their insurance to select 1 of 4 rewards, worth £20. After completing a claim form they would be emailed a voucher, which could be redeemed with their chosen retailer.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="1/15/10/24" m="6/2/12/10" :z="5" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/confused-2023-04.webp" fit="contain" />
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="black-bold">
    <FluidGrid :rows="[10, 8]">
      <FluidBlock d="1/5/3/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>The problem</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/8/14" m="4/2/7/10" :z="4">
        <TextBlock>
          <p class="text-large">After buying car or home insurance, only 25% of our users return to buy with Confused.com the following year.&nbsp;</p>
          <p class="text-large"><br />However, 34% of users that redeem a reward return to buy the following year.<strong> </strong></p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/4/14" m="3/2/5/10" :z="2">
        <TextBlock>
          <h4>The problem:</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/15/9/24" m="8/2/11/10" :z="7">
        <TextBlock>
          <p class="text-large">Improve the offer &amp; the redemption process to encourage more users to claim a reward.</p>
          <p class="text-large">Increase the 34% retention rate by improving Confused.com Rewards.</p>
          <p class="text-large">Integrate rewards into the Confused.com App.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/4/24" m="7/2/9/10" :z="6">
        <TextBlock>
          <h4>The task:</h4>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[22, 13]">
      <FluidBlock d="1/5/3/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Research &amp; discovery</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/13/14" m="4/2/13/10" :z="4">
        <TextBlock padding="6%">
          <h4><strong>What we did</strong>:</h4>
          <ul>
            <li>
              <p class="text-large">Data analysis, to understand what we know about the current offer</p>
            </li>
            <li>
              <p class="text-large">Competitor research, ground our offer against our competitors and other reward schemes in the market </p>
            </li>
            <li>
              <p class="text-large">User research, learn more about our users and their experience claiming a reward</p>
            </li>
            <li>
              <p class="text-large">UX analysis of the end-to-end user journey</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/13/24" m="13/2/23/10" :z="5">
        <TextBlock padding="6%">
          <h4><strong>What we found:</strong></h4>
          <ul>
            <li>
              <p class="text-large">1 of our 4 existing rewards, 12 free car washes – supplied monthly, had a <strong>52%</strong> retention rate, leading to some key ideas.</p>
            </li>
            <li>
              <p class="text-large">Our offer was truly free, not 2-4-1 or similar. This set us apart.</p>
            </li>
            <li>
              <p class="text-large">A choice of rewards was key &amp; it set us apart. We can’t remove choice.</p>
            </li>
            <li>
              <p class="text-large">Some rewards were more difficult to redeem than others, causing frustration.</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="black-bold">
    <FluidGrid :rows="[5, 7]">
      <FluidBlock d="1/5/2/13" m="1/2/3/10" :z="1">
        <TextBlock>
          <h4>The solution</h4>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/5/8/24" m="3/2/6/10" :z="4">
        <TextBlock>
          <h3><span class="text-white">Introduce a new app-only monthly reward to keep users engaged for their entire insurance term.<br /><br />Overhaul the offer &amp; redemption process to encourage more users to redeem a reward.</span></h3>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[27, 17]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Improving the redemption process</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/18/14" m="4/2/20/10" :z="4">
        <TextBlock>
          <p class="text-large">Before designing the new monthly reward, we needed to improve the redemption process of our current offer. We analysed the journey and found:</p>
          <ol>
            <li>
              <p class="text-large">Offering four rewards meant four different journeys. Some rewards were more difficult to redeem than others. This caused a disproportionate amount of customer queries. </p>
            </li>
            <li>
              <p class="text-large">The rewards tracker, used to check the status of your rewards, was inaccurate. This page had a very high bounce rate.</p>
            </li>
            <li>
              <p class="text-large">Users were often unaware of restrictions applicable to each reward, leading to a lot of frustration after the rewards has been redeemed. </p>
            </li>
          </ol>
          <p class="text-large">With a better idea of the problems we had to solve, we then moved on to wire-framing.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="2/15/12/24" m="20/2/26/10" :z="4" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/user-flow-rewards.webp" alt="A user flow looking at the path a user has to take to redeem each of our 4 rewards." fit="contain" />
      </FluidBlock>
      <FluidBlock d="10/15/12/24" m="26/2/28/10" :z="4">
        <TextBlock>
          <p class="text-small">The user flow shows the difference in effort across the 4 reward redemption processes</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[18, 19]">
      <FluidBlock d="1/5/4/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Developing the claim journey</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/20/14" m="3/2/11/10" :z="2">
        <TextBlock>
          <p class="text-large">Our development of the claim journey was key. We needed to introduce the new offer, explain how it worked and ensure all users knew how and when they could claim both the main reward and the monthly reward. </p>
          <p class="text-large">What we did to improve the claims process:</p>
          <ul>
            <li>
              <p class="text-large">Broke the claim process into manageable sections to reduce cognitive load.</p>
            </li>
            <li>
              <p class="text-large">Improved content in the claim form with helpful tips and more accurate error messaging.</p>
            </li>
            <li>
              <p class="text-large">Added specific tracker states per reward, no longer using generic language across all rewards.</p>
            </li>
            <li>
              <p class="text-large">Introduced the monthly reward and reminded users how and when to redeem it.</p>
            </li>
            <li>
              <p class="text-large">Included the monthly reward in the tracker so the user could track everything in one place.</p>
            </li>
            <li>
              <p class="text-large">Product colours allowed us to differentiate a car insurance reward, in blue, and a home insurance reward, in green.</p>
            </li>
          </ul>
          <p class="text-large"></p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/15/16/23" m="11/2/17/10" :z="3" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/group-17971-min.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="16/15/17/23" m="17/2/19/10" :z="4">
        <TextBlock>
          <p>The existing design for the claiming process and the new design.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[20, 13]">
      <FluidBlock d="1/5/4/14" m="1/2/4/10" :z="1">
        <TextBlock>
          <h2>Tracking the new monthly reward</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/14/14" m="4/2/13/10" :z="2">
        <TextBlock>
          <p class="text-large">The new monthly reward meant a user had two active rewards each time they bought car, home or van insurance. </p>
          <p class="text-large">Allowing a user to track all of their rewards in one place was particularly important. So we focused on improving the tracker in the user’s web account and within the app itself. </p>
          <p class="text-large">We tested our mid-fidelity wireframes and found that we needed to differentiate the main reward from the regular reward. But would need to group both rewards within each claim to make it clear they were linked. </p>
          <p class="text-large">We introduced tracker states that were personalised to each individual reward, with over 80 states in total.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/15/10/24" m="13/2/19/10" :z="3" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/tracker-states-development.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="10/15/11/24" m="19/2/21/10" :z="4">
        <TextBlock>
          <p>Development of the tracker states</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="light">
    <FluidGrid :rows="[21, 15]">
      <FluidBlock d="1/5/4/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Creating the app journey</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="5/5/16/14" m="3/2/13/10" :z="2">
        <TextBlock>
          <p class="text-large">Working alongside our app designer, we planned the app flow. We kept the flow very simple, with just 3 steps from home screen to the QR code used to get the monthly reward.</p>
          <p class="text-large">We wanted the app to showcase to our users a cumulative view of all of the rewards they’ve received from us throughout the year. We opted for a calendar grid to show the redemption of each monthly reward.</p>
          <p class="text-large">During testing we discovered that the web tracker cards did not convert exactly into the app as the focus was to redeem the regular reward. Users also found the app experience to be uninspiring, so we introduced imagery to enhance the app screens.</p>
          <p class="text-large">Through a combination of push notifications and emails, we also planned how and when reminders would be sent to the user to tell them their monthly reward was ready to redeem.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/15/10/23" m="13/2/19/10" :z="4" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/group-17965.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="10/15/12/23" m="19/2/21/10" :z="3">
        <TextBlock>
          <p>First wireframes through to the final designs. Allowing the user to redeem and track their monthly reward.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection>
    <FluidGrid :rows="[47, 32]">
      <FluidBlock d="1/5/3/11" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Final designs</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="11/14/23/17" m="3/2/9/10" :z="2" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/5a-ready-to-use.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="11/17/23/20" m="9/2/15/10" :z="3" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/4a-rewards-verified.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="12/20/14/24" m="15/2/17/10" :z="9">
        <TextBlock>
          <p>App screens: Calendar tiles to show monthly redemption &amp; the rewards tracker within the app.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/17/10/20" m="17/2/23/10" :z="5" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/iphone-29.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="4/14/10/17" m="23/2/29/10" :z="6" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/iphone-31.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="8/20/11/24" m="29/2/31/10" :z="8">
        <TextBlock>
          <p>Emails: An example of the monthly reward reminder email and the main reward redemption email.</p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="4/5/31/13" m="31/2/37/10" :z="7" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/rewards-landing-page-final-colours-desktop.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="31/6/33/12" m="37/2/39/10" :z="11">
        <TextBlock>
          <p>Rewards landing page during testing monthly reward testing period. </p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="24/14/33/20" m="40/2/46/10" :z="10" valign="center">
        <ImageBlock src="/images/confused-rewards-redesign/mlp-claim-form-rewards-tracker.webp" fit="contain" />
      </FluidBlock>
      <FluidBlock d="25/20/27/23" m="46/2/48/10" :z="10">
        <TextBlock>
          <p>Web tracker: Web tracker &amp; promotion of the new monthly reward.</p>
        </TextBlock>
      </FluidBlock>
    </FluidGrid>
  </PageSection>

  <PageSection theme="black">
    <FluidGrid :rows="[24, 11]">
      <FluidBlock d="1/5/3/14" m="1/2/3/10" :z="1">
        <TextBlock>
          <h2>Tracked results</h2>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/5/10/11" m="3/2/10/10" :z="5">
        <TextBlock padding="6%">
          <h4>Renewal rates</h4>
          <ul>
            <li>
              <p class="text-large">Tracking to be +25% vs a user that didn’t claim either reward</p>
            </li>
            <li>
              <p class="text-large">Tracking to be +13% vs a user that claimed just the standard reward</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/11/10/17" m="10/2/18/10" :z="4">
        <TextBlock padding="6%">
          <h4>Monthly active users</h4>
          <ul>
            <li>
              <p class="text-large">Trebled monthly active users over the first 6 months</p>
            </li>
          </ul>
          <p></p>
          <p></p>
          <p></p>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="3/17/10/23" m="18/2/23/10" :z="3">
        <TextBlock padding="6%">
          <h4>App downloads</h4>
          <ul>
            <li>
              <p class="text-large">App downloads up around 22% YoY for the first 6 months after launch</p>
            </li>
          </ul>
        </TextBlock>
      </FluidBlock>
      <FluidBlock d="11/5/12/23" m="24/2/25/10" :z="6" valign="center">
        <LineBlock />
      </FluidBlock>
    </FluidGrid>
  </PageSection>
</template>
