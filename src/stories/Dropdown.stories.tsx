import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { fn } from 'storybook/test';
import { Dropdown } from '../components/dropdown/Dropdown';
import './stories.css';

type StoryProps = ComponentProps<typeof Dropdown>;

const meta: Meta<StoryProps> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {
        options: {
            control: 'select',
            description: 'Options to display in the dropdown',
            table: {
                type: { summary: 'string[]' },
                defaultValue: { summary: 'Dropdown' },
            },
        },
        selectedOption: {
            control: 'text',
            description: 'The selected option in the dropdown',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Option 1' },
            }
        },
        onSelect: {
            action: 'selected',
            description: 'callback function triggered when an option is selected',
            table: {
                type: { summary: '() => void' },
                defaultValue: { summary: 'undefined' },
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the dropdown is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        size: {
            control: 'select', 
            options: ['small', 'medium', 'large', 'full'],
            description: 'Size of the dropdown',
            table: {
                type: { summary: "'small' | 'medium' | 'large' | 'full'" },
                defaultValue: { summary: "'medium'" },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text to display when no option is selected',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'select an option' },
            }
        },
        role: {
            control: 'text',
            description: 'ARIA role to enhance accessibility',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            }
        },
        'aria-label': {
            control: 'text',
            description: 'Accessibility label that describes the purpose of the dropdown',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A dropdown component that allows the user to select an option from a list.',
            },
        },
    },
    decorators: [
        (Story) => (
            <div className='cgc--story-decorator'>
                <Story />
            </div>
        ),
    ],
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        selectedOption: 'Option 1',
        onSelect: fn(),
        disabled: false,
        size: 'medium',
        placeholder: 'Select an option',
        role: 'combobox',
        'aria-label': 'Dropdown'
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'A default dropdown component',
            },
        },
    },
};

export const Small: Story = {
    args: {
        size: 'small',
    },
    parameters: {
        docs: {
            description: {
                story: 'A small dropdown component',
            },
        },
    },
}

export const Medium: Story = {
    args: {
        size: 'medium',
    },
    parameters: {
        docs: {
            description: {
                story: 'A medium dropdown component',
            },
        },
    },
}

export const Large: Story = {
    args: {
        size: 'large',
    },
    parameters: {
        docs: {
            description: {
                story: 'A large dropdown component',
            },
        },
    },
}

export const Full: Story = {
    args: {
        size: 'full',
    },
    parameters: {
        docs: {
            description: {
                story: 'A full wigth dropdown component',
            },
        },
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'A disabled dropdown component',
            },
        },
    },
}

export const Accessible: Story = {
    args: {
        'aria-label': 'Dropdown',
    },
    parameters: {
        docs: {
            description: {
                story: 'A accessible dropdown component',
            },
        },
    },
};