/**
 * Projects listed on the My work page, in display order.
 *
 * To add a case study:
 *   1. Create src/pages/work/<slug>.vue (it's served at /<slug>).
 *   2. Add an entry here with the same slug.
 *
 * `title` and `summary` may contain simple HTML such as <strong>.
 * `layout` is optional: it places each part on the grid (desktop, mobile)
 * and is only needed to fine-tune spacing. New entries use DEFAULT_LAYOUT.
 */

export type GridArea = [desktop: string, mobile: string]

export interface ProjectLayout {
  /** [mobile rows, desktop rows] */
  rows: [number, number]
  title: GridArea
  summary: GridArea
  button?: GridArea
  image: GridArea
  line: GridArea
}

export interface Project {
  /** URL path of the case study, without the leading slash */
  slug?: string
  title: string
  summary: string
  /** Thumbnail, e.g. /images/mywork/my-project.webp */
  image: string
  imageFit?: 'cover' | 'contain'
  imageRadius?: number
  /** Where the thumbnail links to (defaults to no link) */
  imageLink?: string
  /** Defaults to "View project" */
  buttonLabel?: string
  /** Listed without a button */
  comingSoon?: boolean
  layout?: ProjectLayout
}

export const DEFAULT_LAYOUT: ProjectLayout = {
  rows: [19, 11],
  title: ['1/5/4/14', '1/2/5/10'],
  summary: ['5/5/7/14', '4/2/8/10'],
  button: ['8/5/10/8', '8/2/11/8'],
  image: ['1/15/10/23', '12/2/18/10'],
  line: ['11/5/12/23', '19/2/20/10'],
}

export const projects: Project[] = [
  {
    slug: 'confusedcom-rewards',
    title: '<strong>Rewards+</strong>: Designing and launching a brand new loyalty scheme',
    summary: 'Taking a collaborative approach to shape a brand-led experience.',
    image: '/images/mywork/r-final-image-landscape.webp',
  },
  {
    slug: 'confused-rewards-redesign-1',
    title: 'Building Peace of Mind: Designing Confused.com’s Reminders Feature',
    summary: 'Forget calendar reminders and sticky notes! Reminders are the automated way to know when your insurance is coming up for renewal',
    image: '/images/mywork/group-13120-1.webp',
    layout: {
      rows: [19, 11],
      title: ['1/5/4/14', '1/2/5/10'],
      summary: ['4/5/7/14', '4/2/8/10'],
      button: ['7/5/9/8', '8/2/11/8'],
      image: ['1/15/10/23', '12/2/18/10'],
      line: ['11/5/12/23', '19/2/20/10'],
    },
  },
  {
    slug: 'confused-rewards-redesign',
    title: 'Confused.com Rewards:<strong> </strong>Expanding a rewards scheme to boost retention',
    summary: 'Showcasing how we researched, designed and launched a new monthly reward scheme to improve app engagement and retain our customers year-on-year.',
    image: '/images/mywork/group-17976.webp',
    buttonLabel: 'View rewards project',
    layout: {
      rows: [22, 12],
      title: ['1/5/4/14', '1/2/5/10'],
      summary: ['5/5/8/14', '6/2/10/10'],
      button: ['9/5/11/9', '11/2/14/8'],
      image: ['1/15/11/23', '15/2/21/10'],
      line: ['12/5/13/23', '22/2/23/10'],
    },
  },
  {
    slug: 'confused-pet-insurance',
    title: 'Pet insurance:<strong> </strong>Simplifying complex information',
    summary: 'Utilising testing to simplify complex information into a form people can navigate with confidence.',
    image: '/images/mywork/group-17975.webp',
    buttonLabel: 'View pet project',
    layout: {
      rows: [20, 11],
      title: ['1/5/4/14', '1/2/4/10'],
      summary: ['5/5/7/14', '5/2/8/10'],
      button: ['8/5/10/9', '9/2/12/7'],
      image: ['1/15/11/23', '13/2/19/10'],
      line: ['11/5/12/23', '20/2/21/10'],
    },
  },
  {
    title: 'Motorbike insurance: Redesigning the question set and quote process',
    summary: '<strong>Coming soon.</strong> A case study exploring the redesign of an insurance comparison service. Looking into processes involved in improving the UX of a key product.',
    image: '/images/mywork/bikegroup-17975.webp',
    comingSoon: true,
    layout: {
      rows: [19, 10],
      title: ['1/5/5/14', '1/2/5/10'],
      summary: ['5/5/8/14', '6/2/10/10'],
      image: ['1/15/9/23', '11/2/17/10'],
      line: ['10/5/11/23', '18/2/19/10'],
    },
  },
  {
    slug: 'contact-us-redesign',
    title: 'Contact us: Improving a contact form and information suite',
    summary: 'How can we make it easier for our users to get the information they need? A case study looking at how we improved our contact form and help centre.',
    image: '/images/contact-us-redesign/2group-13041.webp',
    buttonLabel: 'View contact us project',
    layout: {
      rows: [22, 12],
      title: ['1/5/4/14', '1/2/4/10'],
      summary: ['5/5/8/14', '5/2/9/10'],
      button: ['9/5/11/9', '10/2/13/7'],
      image: ['1/15/9/23', '14/2/20/10'],
      line: ['12/5/13/23', '21/2/22/10'],
    },
  },
  {
    slug: 'content-design-the-anatomy-of-a-landing-page',
    title: 'Content design: The anatomy of a landing page',
    summary: 'A deep dive into my content design process with first-hand examples from a marketing landing page I designed in 2022. See how I approach problems, organise content and modify copy to improve conversion and help users get the information they need.',
    image: '/images/mywork/group-17977.webp',
    imageFit: 'cover',
    imageRadius: 20,
    imageLink: '/expert-ux-design',
    layout: {
      rows: [22, 12],
      title: ['1/5/4/14', '1/2/4/10'],
      summary: ['4/5/9/14', '5/2/12/10'],
      button: ['9/5/11/9', '9/2/12/7'],
      image: ['1/15/10/23', '13/2/21/10'],
      line: ['12/5/13/23', '22/2/23/10'],
    },
  },
]
