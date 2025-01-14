import TextInput from './TextInput';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Section } from '../Section';
import { SectionItems } from '../SectionItems';

const meta: Meta = {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

export const Default: Story = {

    render: (args) => (
        <Section>
            <SectionItems layout='minor-major' gap='60px'>
                <TextInput  {...args}/>
            </SectionItems>
        </Section>

    )
}