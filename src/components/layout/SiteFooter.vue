<template>
  <footer>
    <PageSection theme="black">
      <FluidGrid :rows="[4, 5]">
        <FluidBlock d="1/5/4/11" m="1/2/3/10" :z="1">
          <TextBlock>
            <h4>Let’s work together! ✌️</h4>
            <p>I’d love to hear from you.</p>
          </TextBlock>
        </FluidBlock>
        <FluidBlock d="4/5/6/8" m="3/2/5/10" :z="2" valign="center">
          <ButtonBlock to="/contact">Contact</ButtonBlock>
        </FluidBlock>
      </FluidGrid>
    </PageSection>
  </footer>
</template>
