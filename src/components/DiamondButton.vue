<script setup>
defineProps({
  as: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: '#',
  },
});
</script>

<template>
  <button class="main-button relative cursor-pointer">
    <div class="main-button-label relative py-3 px-6 z-10">
      <slot />
    </div>
    <div class="main-button-bg absolute top-0 left-0 flex h-full w-full">
      <svg
        class="button-bg-edge button-edge-left w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23 46"
        preserveAspectRatio="none"
      >
        <path d="M0 23C5.78 15.215 15.805 5.897 23 0v46C15.805 40.103 5.78 30.785 0 23Z"></path>
      </svg>
      <div class="button-bg-center flex-1 bg-current border-2 border-current"></div>
      <svg
        class="button-bg-edge button-edge-right w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23 46"
        preserveAspectRatio="none"
      >
        <path d="M23 23C16.749 30.785 7.43 40.103 0 46V0c7.43 5.897 16.749 15.215 23 23Z"></path>
      </svg>
    </div>
  </button>
</template>

<style lang="css">
:root .main-button {
  --c-white: #eeeee4;
  --c-cronos: #8a1538;
  --c-orange: rgb(194 65 12);
}
.main-button-label {
  color: var(--c-white);
}
.main-button,
.main-button-label,
.main-button-bg > * {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.main-button {
  box-shadow: 0 0 0 0 rgba(90, 157, 212, 0.5);
  border-radius: 100%;
}
.main-button-bg {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: var(--c-cronos);
}
.button-edge-left {
  transform: translateX(0.4px);
}
.button-edge-right {
  transform: translateX(-0.4px);
}
.main-button:hover .button-bg-center,
.main-button:hover .button-edge-left,
.main-button:hover .button-edge-right {
  color: var(--c-orange);
}
</style>
