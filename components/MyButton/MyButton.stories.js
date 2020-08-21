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
    <my-button :variant="variant" :disabled="disabled" :href="href" :to="to" @click="click">
     Button
    </my-button>
  `,
})

export const InteractiveButton = Template.bind({})
InteractiveButton.args = {
  variant: 'primary',
  to: null,
  href: null,
  disabled: false,
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  ...InteractiveButton.args,
  disabled: true,
}

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  ...InteractiveButton.args,
  variant: 'primary',
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  ...InteractiveButton.args,
  variant: 'secondary',
}

export const TextButton = Template.bind({})
TextButton.args = {
  ...InteractiveButton.args,
  variant: 'text',
}
