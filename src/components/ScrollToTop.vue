<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const { y: scroll } = useWindowScroll()

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    aria-label="Scroll to top"
    class="scroll-top-btn"
    :class="scroll > 300 ? 'visible' : 'hidden'"
    @click="toTop()"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  </button>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  right: 1.5rem;
  bottom: 2rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 53, 36, 0.8);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
}

.scroll-top-btn:hover {
  background-color: rgba(18, 53, 36, 1);
  transform: translateY(-2px);
}

.scroll-top-btn.visible {
  opacity: 1;
  pointer-events: auto;
}

.scroll-top-btn.hidden {
  opacity: 0;
  pointer-events: none;
}

.scroll-top-btn svg {
  width: 1.25rem;
  height: 1.25rem;
}

@media (min-width: 640px) {
  .scroll-top-btn {
    right: 2rem;
  }
}
</style>
