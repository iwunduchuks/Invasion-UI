import Menu from './Menu';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Section } from '../Section';
import { SectionItems } from '../SectionItems';

const meta: Meta = {
    title: 'Components/Menu',
    component: Menu,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

const option = [
    {name: 'One', value: '1'},
    {name: 'Two', value: '2'},
    {name: 'Three', value: '3'},
    {name: 'Four', value: '4'}
]

export const Default: Story = {

    render: (args) => (
        <Section>
            <SectionItems layout='minor-major' gap='60px'>
                <Menu options={option} {...args}/>
            </SectionItems>
        </Section>

    )
}
