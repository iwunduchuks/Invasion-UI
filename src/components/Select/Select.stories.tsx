import Select from './Select';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Section } from '../Section';
import { SectionItems } from '../SectionItems';

const meta: Meta = {
    title: 'Components/Select',
    component: Select,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

const option = [
    'Chinwe',
    'Chukwudi',
    'Chisom',
    'Noble'
]

export const SelectDefault: Story = {

    render: (args) => (
        <Section>
            <SectionItems layout='minor-major' gap='60px'>
                <Select placeholder='Favourite Child' options={option} {...args}/>
            </SectionItems>
        </Section>

    )
}
