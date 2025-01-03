import Logo from './Logo';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Components/Logo',
    component: Logo,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

export const LogoDefault: Story = {
    render: (args) => (
        <Logo {...args}/>
    )
}
