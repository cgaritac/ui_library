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

export const WithChildren: Story = {
    args: {
        buttonText: 'Button with multiple children: ',
        children: [
            <span>Hello</span>,
            <span> - </span>,
            <span>World</span>,
        ],
    },
    parameters: {
        docs: {
            description: {
                story: 'Buttons with children',
            },
        },
    },
    render: ({buttonText, children, ...args}) => (
        <Button {...args}>
            <span>{buttonText}</span>
            {children}
        </Button>
    ),
};

export const disabled: Story = {
    args: {
        buttonText: 'Disabled button',
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Disabled buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <Button {...args}><span>{buttonText}</span></Button>,
};

export const Small: Story = {
    args: {
        buttonText: 'Small button',
        size: 'small',
    },
    parameters: {
        docs: {
            description: {
                story: 'Small buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <Button {...args}><span>{buttonText}</span></Button>,
};

export const Medium: Story = {
    args: {
        buttonText: 'Medium button',
        size: 'medium',
    },
    parameters: {
        docs: {
            description: {
                story: 'Medium buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <Button {...args}><span>{buttonText}</span></Button>,
};

export const Large: Story = {
    args: {
        buttonText: 'Large button',
        size: 'large',
    },
    parameters: {
        docs: {
            description: {
                story: 'Large buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <Button {...args}><span>{buttonText}</span></Button>,
};

export const Full: Story = {
    args: {
        buttonText: 'Full button',
        size: 'full',
    },
    parameters: {
        docs: {
            description: {
                story: 'Full buttons',
            },
        },
    },
    render: ({buttonText, ...args}) => <div className="cgc--story-container" >
                                            <Button {...args}>
                                                <span>{buttonText}</span>
                                            </Button>
                                        </div>,
};