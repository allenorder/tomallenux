import type { App } from 'vue'

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
import GalleryMasonry from './blocks/GalleryMasonry.vue'
import ContactForm from './blocks/ContactForm.vue'
import ProjectRow from './ProjectRow.vue'

/** Building blocks available in every page template without importing them. */
export const pageComponents = {
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
  GalleryMasonry,
  ContactForm,
  ProjectRow,
}

export function registerComponents(app: App) {
  for (const [name, component] of Object.entries(pageComponents)) app.component(name, component)
}

declare module 'vue' {
  export interface GlobalComponents {
    PageSection: typeof PageSection
    FluidGrid: typeof FluidGrid
    FluidBlock: typeof FluidBlock
    ClassicLayout: typeof ClassicLayout
    ClassicRow: typeof ClassicRow
    ClassicCol: typeof ClassicCol
    TextBlock: typeof TextBlock
    ImageBlock: typeof ImageBlock
    ClassicImage: typeof ClassicImage
    ButtonBlock: typeof ButtonBlock
    LineBlock: typeof LineBlock
    SpacerBlock: typeof SpacerBlock
    AccordionBlock: typeof AccordionBlock
    ChartBlock: typeof ChartBlock
    GalleryMasonry: typeof GalleryMasonry
    ContactForm: typeof ContactForm
    ProjectRow: typeof ProjectRow
  }
}
