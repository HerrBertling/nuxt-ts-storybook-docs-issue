import { action } from '@storybook/addon-actions'
import MyButton from './index.vue'

export default {
  title: 'Buttons',
  component: MyButton,
}

const Template = (args) => ({
  props: Object.keys(args),
  components: { MyButton },
  methods: {
    click: action('Button clicked!'),
  },
  template: `
    <my-button :variant="variant" @click="click">
     Button
    </my-button>
  `,
})

export const InteractiveButton = Template.bind({
  variant: 'primary',
})

export const DisabledButton = Template.bind({
  disabled: true,
  variant: 'primary',
})

export const PrimaryButton = Template.bind({
  variant: 'primary',
})

export const SecondaryButton = Template.bind({
  variant: 'secondary',
})

export const TextButton = Template.bind({
  variant: 'text',
})
