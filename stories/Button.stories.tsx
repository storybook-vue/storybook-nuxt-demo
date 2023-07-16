import type { Meta, StoryObj, VueRenderer } from '@storybook/vue3';
import type { DecoratorFunction } from "@storybook/types"
import {  h } from "vue";

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const decorators:DecoratorFunction<VueRenderer>[] = [(storyFn)=> h('div',{style:{border:'2px solid red',padding:'20px'}} ,h(storyFn) )]
const meta = {
  title: 'Example/Custom Render Function',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false }, // default value
  decorators
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const JSXSyntax: Story = {
  args: {
    label: ' Rendered Using JSX Syntax',
    size: 'small',
  },
  render(args) {
    return <Button {...args} />;
  }
};

export const HRenderFunction: Story = {
  args:{
    label: ' Rendered Using h() function',
  },
  render(args) {
    return h(Button, args);
  },

}

export const CompositionApiComponent: Story = {
  args:{
    label: ' Rendered using Component with Composition API  ',
  },
  render(args) {
    return ({
      components: { Button },
      setup(props, { attrs }){
        return { props , args , attrs}
    }, 
      template: `<pre>{{ JSON.stringify(args , 0, 2)}}</pre> 
                 <Button v-bind="args"  />` 
    });
  }  
}


export const OptionsApiComponent: Story = {
  args:{
    label: ' Rendered using Component with Options API  ',
  },
  render(args , { argTypes }) {
    return ({
      props: Object.keys(argTypes),
      data: () => ({ args }),
      components: { Button },
      template: `<pre>{{ JSON.stringify(args,0,2)}}</pre><Button v-bind="args" />`
    });
  }  
}

