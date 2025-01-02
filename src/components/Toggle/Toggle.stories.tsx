import Toggle from "./Toggle";
import { ToggleItems } from "../ToggleItems";
import React from "react";
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Components/Toggle',
    component: Toggle,
    args: {
      // Default props for Toggle
    },
  };
  
export default meta;

type Story = StoryObj;

export const ToggleWithItems: Story = {
    render: (args) => (
    <Toggle {...args}>
        <ToggleItems value="One" defaultChecked/>
        <ToggleItems value="Two" />
        <ToggleItems value="Three" />
    </Toggle>
    )
};