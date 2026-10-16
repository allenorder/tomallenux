import type { App } from 'vue'

import Section from './layout/Section.vue'
import Prose from './blocks/Prose.vue'
import Figure from './blocks/Figure.vue'
import CaseHero from './blocks/CaseHero.vue'
import ProjectFacts from './blocks/ProjectFacts.vue'
import QuoteCard from './blocks/QuoteCard.vue'
import Panel from './blocks/Panel.vue'
import Accordion from './blocks/Accordion.vue'
import CtaButton from './blocks/CtaButton.vue'
import ShareMeter from './blocks/ShareMeter.vue'
import GalleryMasonry from './blocks/GalleryMasonry.vue'
import ContactForm from './blocks/ContactForm.vue'
import ProjectCard from './ProjectCard.vue'
import NextProject from './NextProject.vue'

// Squarespace-era blocks, still used by case studies not yet moved to the blocks above
import PageSection from './layout/PageSection.vue'
import FluidGrid from './layout/FluidGrid.vue'
import FluidBlock from './layout/FluidBlock.vue'
import ClassicLayout from './layout/ClassicLayout.vue'
import ClassicRow from './layout/ClassicRow.vue'
import ClassicCol from './layout/ClassicCol.vue'
import TextBlock from './blocks/TextBlock.vue'
import ImageBlock from './blocks/ImageBlock.vue'
import ClassicImage from './blocks/ClassicImage.vue'
import ButtonBlock from './blocks/ButtonBlock.vue'
import LineBlock from './blocks/LineBlock.vue'
import SpacerBlock from './blocks/SpacerBlock.vue'
import AccordionBlock from './blocks/AccordionBlock.vue'
import ChartBlock from './blocks/ChartBlock.vue'

/**
 * Building blocks available in every page template without importing them.
 * Vuetify components (v-row, v-col, v-divider, …) are available too.
 */
export const pageComponents = {
  Section,
  Prose,
  Figure,
  CaseHero,
  ProjectFacts,
  QuoteCard,
  Panel,
  Accordion,
  CtaButton,
  ShareMeter,
  GalleryMasonry,
  ContactForm,
  ProjectCard,
  NextProject,
  PageSection,
  FluidGrid,
  FluidBlock,
  ClassicLayout,
  ClassicRow,
  ClassicCol,
  TextBlock,
  ImageBlock,
  ClassicImage,
  ButtonBlock,
  LineBlock,
  SpacerBlock,
  AccordionBlock,
  ChartBlock,
}

export function registerComponents(app: App) {
  for (const [name, component] of Object.entries(pageComponents)) app.component(name, component)
}

type PageComponents = typeof pageComponents

declare module 'vue' {
  export interface GlobalComponents extends PageComponents {}
}
