import React from "react";
import AppBar from "../AppBar/AppBar";
import AppBarGroup from "./AppBarGroup";
import { Button } from "../Button";
import { Meta, StoryObj } from '@storybook/react';
import { Logo } from "../Logo";

const meta: Meta = {
    title: 'Components/AppBarGroup',
    component: AppBarGroup,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

export const TwoAppBarGroups: Story = {
    render: (args) => (
      <AppBar>
        <AppBarGroup alignSelf="center" gap="32px" {...args}>
          <Logo/>
          <h6>Label</h6>
        </AppBarGroup>
        <AppBarGroup justifyContent="end" gap="16px" {...args}>
          <Button name="Label" variant="text"/>
          <Button name="Label" variant="text"/>
          <Button name="Label" variant="text"/>
          <Button name="Label"/>
        </AppBarGroup>
      </AppBar>
    )
}