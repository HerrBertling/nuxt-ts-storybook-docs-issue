<template>
  <Component
    :is="elementToRender"
    :class="['button', variant]"
    v-bind="linkProps"
    :disabled="disabled"
    @click="click"
  >
    <span>
      <slot />
    </span>
  </Component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import { RawLocation } from 'vue-router'

@Component({})
export default class BaseButton extends Vue {
  @Prop({ default: 'primary' }) variant!: 'primary' | 'secondary' | 'text'

  @Prop({ default: false }) disabled?: boolean

  @Prop({ default: null }) to?: RawLocation

  @Prop({ default: null }) href?: string

  @Prop({ default: 'button' }) type?: string

  get elementToRender() {
    if (this.to) {
      return 'NuxtLink'
    }
    if (this.href) {
      return 'a'
    }
    return 'button'
  }

  get linkProps() {
    if (this.to) {
      return {
        to: this.to,
      }
    }
    if (this.href) {
      return {
        href: this.href,
      }
    }
    return {
      type: this.type,
    }
  }

  click() {
    if (this.to) {
      this.$router.push(this.to)
    } else {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.button {
  --colorWhite: #fff;
  --colorPrimary: #3282b8;
  --colorPrimaryLight: #5fabde;
  --colorPrimaryDark: #186aa1;
  --colorText: #1b262c;
  --colorTextDisabled: #404a4f;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-height: 2.5rem;
  padding: 0.5rem 0.75rem;
  color: var(--colorWhite);
  font-weight: 400;
  font-family: Avenir, sans-serif;
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  border: 2px solid;
  border-radius: 0.25rem;
  cursor: pointer;
}
.button:disabled {
  cursor: default;
  opacity: 0.5;
}

.button:hover,
.button:active,
.button:focus {
  text-decoration: none;
  outline: none;
}

.primary {
  color: var(--colorWhite);
  background-color: var(--colorPrimary);
  border-color: var(--colorPrimary);
}
.primary:disabled {
  color: var(--colorWhite);
  background-color: var(--colorPrimaryLight);
  border-color: var(--colorPrimaryLight);
}

.primary:hover:not([disabled]),
.primary:active:not([disabled]),
.primary:focus:not([disabled]) {
  background-color: var(--colorPrimaryDark);
  border-color: var(--colorPrimaryDark);
}

.secondary {
  color: var(--colorText);
  background-color: transparent;
  border-color: var(--colorText);
}
.secondary:disabled {
  color: var(--colorTextDisabled);
  border-color: var(--colorTextDisabled);
}

.secondary:hover:not([disabled]),
.secondary:focus:not([disabled]),
.secondary:active:not([disabled]) {
  color: var(--colorPrimary);
  border-color: var(--colorPrimary);
}

.text {
  color: var(--colorText);
  background-color: transparent;
  border-color: transparent;
}
.text:disabled {
  color: var(--colorTextDisabled);
}

.text:hover:not([disabled]),
.text:focus:not([disabled]),
.text:active:not([disabled]) {
  color: var(--colorPrimary);
}
</style>
