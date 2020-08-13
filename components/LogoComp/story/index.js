import LogoComp from '../index.vue'

export default {
  title: 'LogoComp',
  component: LogoComp,
}

const Template = (args) => ({
  props: Object.keys(args),
  components: { LogoComp },
  template: `<logo-comp :msg="msg" broken-msg="brokenMsg" />`,
})

export const LogoDefault = Template.bind({})
LogoDefault.args = { msg: 'HENLO' }
