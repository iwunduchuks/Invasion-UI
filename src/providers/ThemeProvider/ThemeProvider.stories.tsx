import ThemeProvider from "./ThemeProvider";
import {Button} from "../../components";
import {Section} from "../../components";
import React from "react";

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Providers/ThemeProvider',
    component: ThemeProvider,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

export const UsingATheme: Story = {
    render: (args) => (
      <ThemeProvider theme='ba' {...args}>
        <Section gap="gap-24px">
          <h4>Using a base theme</h4>
          <p>Change theme in control to see a different feeling</p>
          <Button name="Label"/>
        </Section>
      </ThemeProvider>
    )
};