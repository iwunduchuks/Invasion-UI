import Select from './Selectt';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Section } from '../Section';
import { SectionItems } from '../SectionItems';

const meta: Meta = {
    title: 'Components/Selectt',
    component: Select,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

const option = [
    {name: 'One', value: '1'},
    {name: 'Two', value: '2'},
    {name: 'Three', value: '3'},
    {name: 'Four', value: '4'},
    {name: 'Five', value: '5'},
    {name: 'Six', value: '6'},
    {name: 'Seven', value: '7'},
]

export const SelectDefault: Story = {

    render: (args) => (
        <Section>
            <SectionItems layout='minor-major' gap='60px'>
                <Select options={option} placeholder='Select'/>
            </SectionItems>
        </Section>

    )
}
