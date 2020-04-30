<template>
  <button
    ref="switch-rhythm"
    class="switch-rhythm"
    role="switch"
    :aria-checked="checkToggle"
    @click="switchToggle"
    @keypress="switchToggle"
  >
    Darkmode Toggle
    <span aria-hidden="true" class="show-labels" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    checkToggle () {
      if (!this.$store.state.darkMode.toggleDarkMode) { return 'false' }
      return this.$store.state.darkMode.toggleDarkMode
    }
  },
  methods: {
    switchToggle (e: Event): void {
      e.preventDefault()
      if (e.target instanceof HTMLInputElement) {
        e.target.setAttribute(
          'aria-checked',
          e.target.getAttribute('aria-checked') === 'true' ? 'false' : 'true'
        )
      }
      this.$store.dispatch('darkMode/TOGGLE_DARK_MODE')
    }
  }
})
</script>

<style scoped>
.switch-rhythm {
  background: none;
  border: none;
  display: block;
  color: var(--fontPrimary);
  font-size: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 10;
  text-align: left;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
}
.switch-rhythm span:before,
.switch-rhythm span:after {
  border: 1px solid var(--BorderPrimary);
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.switch-rhythm span:after {
  background-color: var(--Primary);
  border-radius: 100%;
  height: calc(24px / 1.45);
  right: calc(24px / 1.45);
  transition: right 0.1825s ease-in-out;
  width: calc(24px / 1.45);
}

.switch-rhythm span:before {
  background-color: var(--BtnActive);
  border-radius: 24px;
  height: 24px;
  right: 0.25em;
  transition: background-color 0.2s ease-in-out;
  width: 2.75em;
}

.switch-rhythm span {
  pointer-events: none;
}

.switch-rhythm[aria-checked="true"] span:after {
  right: 8px;
}

.switch-rhythm[aria-checked="true"] span:before {
  background-color: var(--Active);
}

.switch-rhythm .show-labels:before {
  color: var(--Active);
  line-height: 1.6;
  text-indent: 1.625em;
  width: 3.5em;
}

.switch-rhythm[aria-checked="false"] .show-labels:after {
  right: 40px;
}

@media screen and (-ms-high-contrast: active) {
  .switch-rhythm span:after {
    background-color: windowText;
  }
}
</style>
