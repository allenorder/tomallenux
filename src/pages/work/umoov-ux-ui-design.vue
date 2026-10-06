<script setup lang="ts">
import { usePageMeta } from '@/lib/meta'

usePageMeta({
  title: 'Umoov, UX & UI Design',
  description: 'Umoov makes exercise easy, whatever your schedule or fitness level.  Discover manageable home workouts and take on daily challenges to stay motivated…',
})
</script>

<template>
  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="10">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="8">
              <ClassicRow>
                <ClassicCol :span="4">
                  <TextBlock>
                    <h4>UX &amp; UI design project</h4>
                    <h2>Umoov</h2>
                    <p>Umoov makes exercise easy, whatever your schedule or fitness level. Discover manageable home workouts and take on daily challenges to stay motivated during the working week. </p>
                    <p>Exercise is something anyone can pick up, find something they love, and fit it into their daily schedule. Our aim is to get people <strong>healthy</strong> and <strong>happy</strong> at home.</p>
                    <p>This project was completed as part of my UX and UI course study with CareerFoundry.</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="4">
                  <ClassicImage src="/images/umoov-ux-ui-design/image-2-new.webp" :max-width="4134" />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection theme="light">
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="2">
                  <TextBlock>
                    <h4>Project Brief</h4>
                    <p>Design a web app that encourages people to do more exercise</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="2">
                  <TextBlock>
                    <h4>My Role</h4>
                    <p>UX &amp; UI Design, User Research, Information Architecture, Prototyping</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="2">
                  <TextBlock>
                    <h4>Tools</h4>
                    <p>Adobe XD, Illustrator, Indesign</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="2">
                  <TextBlock>
                    <h4>Duration</h4>
                    <p>Completed outside of work hours over 7 weeks. October - December 2020</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="8">
                  <TextBlock>
                    <h3>The process</h3>
                  </TextBlock>
                  <AccordionBlock
                    :items="[
                      { title: '1. Define', body: '<p><strong>Create user flows</strong> to define the key paths a user must take to complete tasks. <strong>Explore the core functionalities </strong>that will solve user problems. <strong>Develop the tone</strong> of the project using moodboards.</p>' },
                      { title: '2. Explore', body: '<p><strong>Create low, mid and high fidelity wireframes</strong> to create the layout. Utilise low-fidelity wireframes to make quick iterations and explore ideas before refining the design in mid and high fidelity. <strong>Develop a brand identity </strong>that aligns with the user.</p>' },
                      { title: '3. Create', body: '<p><strong>Refine the direction of the UI</strong> by creating a high-fidelity prototype and then communicate all design elements in a style guide.</p>' },
                    ]"
                  />
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection theme="light">
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="4">
                  <TextBlock>
                    <h3>The problem</h3>
                    <p>People with busy work schedules struggle to find the <strong>time</strong> and <strong>motivation</strong> to workout regularly. Finding exercise routines for the right level can be difficult, especially when wanting to try something new.</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="4">
                  <TextBlock>
                    <h3>The solution</h3>
                    <p>Create a web-app that <strong>motivates</strong> people into an exercise routine that suits their level, schedule, and interests. Users want to <strong>learn</strong> how exercises are done and <strong>track progress </strong>with achievable goals.</p>
                  </TextBlock>
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="6">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="4">
              <TextBlock>
                <h3>Information architecture</h3>
              </TextBlock>
              <LineBlock />
              <TextBlock>
                <p>I started by studying the brief along with the user stories and problems. I also mapped out a <strong>user flow </strong>for the project. I focused on the two key functionalities, finding the simplest way a user can complete their task.</p>
                <p><strong>How do these features solve the users problems?</strong></p>
                <p>Core takeaways from the user stories:</p>
                <ol>
                  <li>
                    <p><strong>Users want to be motivated</strong> to workout every day</p>
                  </li>
                  <li>
                    <p><strong>Users want to be rewarded</strong> for their efforts so they stay engaged</p>
                  </li>
                  <li>
                    <p><strong>Users would like to learn</strong> how to do exercises correctly</p>
                  </li>
                </ol>
                <p>I decided <strong>gamification</strong> was a smart direction to take the project in. The core functionalities, therefore, allow users to discover workout videos, join workout challenges and gain daily achievements for hitting their goals. </p>
              </TextBlock>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="4">
          <ClassicImage src="/images/umoov-ux-ui-design/user-flows.webp" :max-width="5906" />
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="8">
                  <LineBlock />
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="6">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="4">
              <TextBlock>
                <h3>Mood board</h3>
              </TextBlock>
              <LineBlock />
              <TextBlock>
                <p>I explored <strong>colour</strong>, <strong>shape</strong>, <strong>images</strong> and <strong>typography</strong> in a mood board to establish the tone of the project.</p>
                <p>My aim was to show dynamic movement. It was important not to overwhelm users with busy or intimidating colours or imagery so I used negative space around each element to give the design room to breathe. I then chose a vibrant pink to inject energy into the design. </p>
                <p>The reoccurring curved rectangle shape contributes to a feeling of movement as the sweeping angle moves round to the sharp corner. </p>
              </TextBlock>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="4">
          <ClassicImage src="/images/umoov-ux-ui-design/mood-board.webp" :max-width="6496" />
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="8">
                  <LineBlock />
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="6">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="4">
              <TextBlock>
                <h3>Development</h3>
              </TextBlock>
              <LineBlock />
              <TextBlock>
                <p>Following a mobile-first approach, I mapped out my ideas in low-fidelity wireframes. This process allowed me to explore creative ideas quickly while making on-the-go iterations. I created a low-fidelity prototype to test the basic layout and flow. </p>
                <p>After mapping out the low-fidelity wireframes into the user flow I upgraded each screen to mid-fidelity. From here, I could build in typography, colour, images and iconography. </p>
              </TextBlock>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="4">
          <ClassicImage src="/images/umoov-ux-ui-design/challenges-progression.webp" :max-width="8445">
            <p>Challenges screen progression from low to high fidelity</p>
          </ClassicImage>
          <ClassicImage src="/images/umoov-ux-ui-design/workout-list-progression.webp" :max-width="8445">
            <p>Workouts screen progression from low to high fidelity</p>
          </ClassicImage>
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="8">
                  <LineBlock />
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="6">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="4">
              <TextBlock>
                <h3>Creating the brand</h3>
              </TextBlock>
              <LineBlock />
              <TextBlock>
                <p>Umoov needed an identity that aligned with the content - simple but dynamic. The brand logo mark is a combination of the letter U and two out stretched arms. </p>
                <p><strong>Achievement Badges:</strong></p>
                <p>The achievement badges were designed to develop the gamification of the project. They’re also effective in keeping the app fun and light-hearted as users take on exercise challenges.</p>
              </TextBlock>
              <ClassicImage src="/images/umoov-ux-ui-design/all-badges.webp" :max-width="8268" />
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="1">
          <SpacerBlock />
        </ClassicCol>
        <ClassicCol :span="3">
          <ClassicImage src="/images/umoov-ux-ui-design/logos-examples.webp" :max-width="3449" />
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="8">
                  <LineBlock />
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection>
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="6">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="4">
              <TextBlock>
                <h3>Style guide</h3>
              </TextBlock>
              <LineBlock />
              <TextBlock>
                <p>I then created a style guide for the project. This includes guidelines for colour, typography, iconography, logo, imagery and UI elements.</p>
              </TextBlock>
              <SpacerBlock />
              <ClassicImage src="/images/umoov-ux-ui-design/style-guide-typography.webp" :max-width="7087" />
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="4">
          <ClassicImage src="/images/umoov-ux-ui-design/style-guide-colours.webp" :max-width="7087" :aspect="52.43" />
          <ClassicImage src="/images/umoov-ux-ui-design/style-guide-logo.webp" :max-width="7087" />
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
      <ClassicRow>
        <ClassicCol :span="12">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="10">
              <ClassicRow>
                <ClassicCol :span="8">
                  <LineBlock />
                </ClassicCol>
                <ClassicCol :span="2">
                  <SpacerBlock />
                </ClassicCol>
              </ClassicRow>
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>

  <PageSection theme="dark">
    <ClassicLayout>
      <ClassicRow>
        <ClassicCol :span="10">
          <ClassicRow>
            <ClassicCol :span="2">
              <SpacerBlock />
            </ClassicCol>
            <ClassicCol :span="8">
              <TextBlock>
                <h3>Final screens &amp; mock ups</h3>
              </TextBlock>
              <LineBlock />
              <ClassicImage src="/images/umoov-ux-ui-design/image-7.webp" :max-width="4488" />
            </ClassicCol>
          </ClassicRow>
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
      <ClassicRow>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
        <ClassicCol :span="8">
          <ClassicImage src="/images/umoov-ux-ui-design/all-screens-min.webp" :max-width="7087" :aspect="98.18" />
          <ClassicRow>
            <ClassicCol :span="4">
              <ClassicImage src="/images/umoov-ux-ui-design/challenges-walkthrough.webp" :max-width="256" />
            </ClassicCol>
            <ClassicCol :span="4">
              <ClassicImage src="/images/umoov-ux-ui-design/workout-walkthrough-video.webp" :max-width="256" />
            </ClassicCol>
          </ClassicRow>
          <LineBlock />
        </ClassicCol>
        <ClassicCol :span="2">
          <SpacerBlock />
        </ClassicCol>
      </ClassicRow>
    </ClassicLayout>
  </PageSection>
</template>
