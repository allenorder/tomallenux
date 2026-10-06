<script setup lang="ts">
/**
 * Fixed site header. It slides away when scrolling down and comes back when
 * scrolling up. Below 768px the links move into a full-screen menu.
 */
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navigation } from '../../data/site'
import { imageInfo } from '../../lib/images'

const route = useRoute()
const menuOpen = ref(false)
const hidden = ref(false)
const logo = imageInfo('/images/shared/logo-second-try.webp')

let lastY = 0
function onScroll() {
  const y = window.scrollY
  if (menuOpen.value) return
  hidden.value = y > lastY && y > 100
  lastY = y
}

function isActive(to: string) {
  return route.path === to || route.path.startsWith(`${to}/`)
}

watch(() => route.fullPath, () => {
  menuOpen.value = false
  hidden.value = false
})
watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header" :class="{ 'is-hidden': hidden && !menuOpen, 'menu-open': menuOpen }">
    <div class="site-header__inner">
      <RouterLink to="/" class="site-header__logo">
        <img
          src="/images/shared/logo-second-try.webp"
          :srcset="logo.srcset"
          sizes="48px"
          :width="logo.width"
          :height="logo.height"
          alt="Tom Allen"
        />
      </RouterLink>

      <nav class="site-header__nav" aria-label="Main">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="site-header__link"
          :class="{ 'is-active': isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        class="burger"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span class="burger__line" />
        <span class="burger__line" />
      </button>
    </div>
  </header>

  <div id="mobile-menu" class="mobile-menu" :class="{ 'is-open': menuOpen }" :inert="!menuOpen">
    <nav class="mobile-menu__nav" aria-label="Main">
      <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="mobile-menu__link">
        {{ item.label }}
      </RouterLink>
    </nav>
  </div>

  <div class="site-header-spacer" aria-hidden="true" />
</template>

<style scoped>
.site-header {
  --logo-height: 30px;
  --pad-y: var(--mobile-gutter);
  --pad-x: var(--mobile-gutter);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: var(--white);
  border-bottom: 1px solid var(--accent);
  transition: transform 0.14s ease-in-out;
}
.site-header.is-hidden {
  transform: translateY(-100%);
}
.site-header.menu-open {
  border-bottom-color: transparent;
  background: transparent;
}
.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: calc(var(--max-page-width) + var(--pad-x) * 2);
  margin: 0 auto;
  padding: var(--pad-y) var(--pad-x);
}
.site-header__logo {
  display: block;
  line-height: 0;
}
.site-header__logo img {
  width: auto;
  height: var(--logo-height);
}

.site-header__nav {
  display: none;
}

.burger {
  position: relative;
  width: 47px;
  height: 37px;
  padding: 1px 6px;
  border: 0;
  background: none;
  cursor: pointer;
}
.burger__line {
  position: absolute;
  left: 6px;
  right: 6px;
  height: 1px;
  background: var(--black);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), top 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.burger__line:first-child {
  top: 12.5px;
}
.burger__line:last-child {
  top: 23.5px;
}
.menu-open .burger__line {
  top: 18px;
  left: 11px;
  right: 11px;
}
.menu-open .burger__line:first-child {
  transform: rotate(45deg);
}
.menu-open .burger__line:last-child {
  transform: rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  padding: 83.8px 9vw 0;
  background: var(--white);
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
}
.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 37.4px;
  margin-top: -83.8px;
}
.mobile-menu__link {
  color: var(--black);
  font-size: 2.072rem;
  line-height: 1;
  text-decoration: none;
}

.site-header-spacer {
  height: var(--header-h);
}

@media (min-width: 768px) {
  .site-header {
    --logo-height: 61px;
    --pad-y: 1vw;
    --pad-x: var(--page-gutter);
  }
  .site-header__nav {
    display: flex;
    gap: 2.9vw;
  }
  .site-header__link {
    padding: 0.1em 0;
    color: var(--black);
    font-size: var(--meta-size);
    line-height: var(--body-line);
    text-decoration: none;
    background: linear-gradient(currentColor, currentColor) no-repeat left bottom / 0 1px;
  }
  .site-header__link:hover,
  .site-header__link.is-active {
    background-size: 100% 1px;
  }
  .burger,
  .mobile-menu {
    display: none;
  }
}
</style>
