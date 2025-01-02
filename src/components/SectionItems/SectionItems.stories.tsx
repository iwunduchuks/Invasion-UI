import Section from "../Section/Section";
import SectionItems from "./SectionItems";
import React from "react";
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Components/SectionItems',
    component: SectionItems,
    args: {
    },
  };
  
export default meta;

type Story = StoryObj;

export const Layouts: Story = {
    render: (args) => (
        <Section gap="gap-48px">
            <SectionItems gap="24px" layout="full" {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Full
                </div>
            </SectionItems>
            <SectionItems gap="24px" layout='major-minor' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Major
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
            </SectionItems>
            <SectionItems gap="24px" layout='minor-major' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Major
                </div>
            </SectionItems>
            <SectionItems gap="24px" layout='half-half' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Half
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Half
                </div>
            </SectionItems>
            <SectionItems gap="24px" layout='minor4' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
            </SectionItems>
            <SectionItems gap="0" layout='half-minor2' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Half
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
            </SectionItems>
            <SectionItems gap="24px" layout='minor2-half' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Half
                </div>
            </SectionItems>
            <SectionItems gap="24px" layout='minor-half-minor' {...args}>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Half
                </div>
                <div style={{border: '1px solid black', borderRadius: '24px', padding: '12px'}}>
                    Minor
                </div>
            </SectionItems>
        </Section>
    )
};