import { withKnobs, select } from '@storybook/addon-knobs'
import { Component } from 'vue'
import MyButton from './index.vue'

export default {
  component: MyButton,
  title: 'Button with Knobs',
  decorators: [withKnobs],
}

export function normal(): Component {
  return {
    components: { MyButton },
    props: {
      // naming a prop the same way the component's prop is named leads to
      // a broken state where the property value is not passed to the component
      variant: {
        default: select('Variant', ['primary', 'secondary', 'text'], 'primary'),
      },
    },
    template: '<MyButton :variant="variant">Button</MyButton>',
  }
}
