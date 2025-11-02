import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { fn } from 'storybook/test';
import { Button } from '../components/button/Button';
import './stories.css';

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        buttonText: { control: 'text' },
        primary: { control: 'boolean' },
        size: { control: 'select', options: ['small', 'medium', 'large', 'full'] },
        backgroundColor: { control: 'color' },
        disabled: { control: 'boolean' },
        type: { control: 'select', options: ['button', 'submit', 'reset'] },
        onClick: { action: 'clicked' },
    },
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A button component',
            },
        },
    },
    decorators: [
        (Story) => (
            <div className="cgc--story-decorator">
                <Story />
            </div>
        ),
    ],
    args: {
        buttonText: 'Button',
        primary: true,
        size: 'medium',
        disabled: false,
        type: 'button',
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Primary buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <Button {...args}><span>{buttonText}</span></Button>,
};

export const Secondary: Story = {
    args: {
        primary: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Secondary buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <Button {...args}><span>{buttonText}</span></Button>,
};