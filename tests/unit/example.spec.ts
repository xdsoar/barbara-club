import { shallowMount } from '@vue/test-utils'
import Layout from '@/layout/index.vue'

describe('Layout.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Layout)
    expect(wrapper).toBeDefined();
  })
})
