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
        buttonText: { 
            control: 'text',
            description: 'Text content to display inside the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: "'Button'" },
            },
        },
        primary: { 
            control: 'boolean',
            description: 'Whether the button uses primary or secondary styling',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
        },
        size: { 
            control: 'select', 
            options: ['small', 'medium', 'large', 'full'],
            description: 'Size of the button',
            table: {
                type: { summary: "'small' | 'medium' | 'large' | 'full'" },
                defaultValue: { summary: "'medium'" },
            },
        },
        backgroundColor: { 
            control: 'color',
            description: 'Custom background color for the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        disabled: { 
            control: 'boolean',
            description: 'Whether the button is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        type: { 
            control: 'select', 
            options: ['button', 'submit', 'reset'],
            description: 'HTML button type attribute',
            table: {
                type: { summary: "'button' | 'submit' | 'reset'" },
                defaultValue: { summary: "'button'" },
            },
        },
        'aria-label': { 
            control: 'text',
            description: 'Accessibility label that describes the purpose of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        onClick: { 
            action: 'clicked',
            description: 'Callback function triggered when the button is clicked',
            table: {
                type: { summary: '() => void' },
                defaultValue: { summary: 'undefined' },
            },
        },
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

export const WithAriaLabel: Story = {
    args: {
        buttonText: '👍',
        'aria-label': 'Like this content',
    },
    parameters: {
        docs: {
            description: {
                story: 'Button with aria-label for accessibility. Useful when the button contains only icons or non-descriptive content for screen readers.',
            },
        },
    },
    render: ({buttonText, ...args}) => (
        <div className="cgc--story-accessibility-wrapper">
            <Button {...args}>
                {buttonText}
            </Button>
            <p className="cgc--story-accessibility-text">
                This button only shows an emoji, but screen readers will announce: "Like this content"
            </p>
        </div>
    ),
};

export const IconButton: Story = {
    args: {
        buttonText: '✕',
        size: 'small',
        'aria-label': 'Close dialog',
    },
    parameters: {
        docs: {
            description: {
                story: 'Icon button example with aria-label for accessibility.',
            },
        },
    },
    render: ({buttonText, ...args}) => (
        <div className="cgc--story-accessibility-wrapper">
            <Button {...args}>
                {buttonText}
            </Button>
            <p className="cgc--story-accessibility-text">
                Accessible close button for screen reader users
            </p>
        </div>
    ),
};