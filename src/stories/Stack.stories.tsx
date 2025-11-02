import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { Stack } from "../components/stack/stack";
import './stories.css';

type StoryProps = ComponentProps<typeof Stack> & {
    amountOfChildren: number;
};

const meta: Meta<StoryProps> = {
    title: 'Components/Stack',
    component: Stack,
    argTypes: {
        amountOfChildren: { 
            control: 'number',
            description: 'Number of child elements to display in the Stack',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        orientation: { 
            control: 'select', 
            options: ['horizontal', 'vertical'],
            description: 'Layout direction of the Stack (horizontal or vertical)',
            table: {
                type: { summary: "'horizontal' | 'vertical'" },
                defaultValue: { summary: "'horizontal'" },
            },
        },
        gap: { 
            control: 'select', 
            options: ['1', '2', '3', '4', '5'],
            description: 'Spacing between child elements',
            table: {
                type: { summary: "'1' | '2' | '3' | '4' | '5'" },
                defaultValue: { summary: "'1'" },
            },
        },
        backgroundColor: { 
            control: 'color',
            description: 'Background color of the Stack',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        height: { 
            control: 'text',
            description: 'Height of the Stack (e.g., "100px", "50vh")',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        width: { 
            control: 'text',
            description: 'Width of the Stack (e.g., "100px", "50vw")',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        borderRadius: { 
            control: 'text',
            description: 'Border radius of the Stack (e.g., "8px", "50%")',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        padding: { 
            control: 'text',
            description: 'Internal padding of the Stack (e.g., "16px", "1rem")',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        as: { 
            control: 'select', 
            options: ['div', 'section', 'nav', 'main', 'aside', 'header', 'footer'],
            description: 'Semantic HTML element to use as container',
            table: {
                type: { summary: 'ElementType' },
                defaultValue: { summary: "'div'" },
            },
        },
        'aria-label': { 
            control: 'text',
            description: 'Accessibility label that describes the purpose of the Stack',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        'aria-labelledby': { 
            control: 'text',
            description: 'ID of the element that labels this Stack',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        'aria-describedby': { 
            control: 'text',
            description: 'ID of the element that describes this Stack',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        role: { 
            control: 'text',
            description: 'ARIA role to enhance accessibility',
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
                component: 'A stack component',
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
};
    
export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
        amountOfChildren: 3,
        gap: '1',
    },
    render: ({...args}) => <Stack {...args}>{createChildren(args.amountOfChildren)}</Stack>,
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        amountOfChildren: 3,
    },
    render: ({...args}) => <Stack {...args}>{createChildren(args.amountOfChildren)}</Stack>,
};

export const Accessible: Story = {
    args: {
        orientation: 'vertical',
        amountOfChildren: 3,
        'aria-label': 'Navigation Stack',
        gap: '2',
    },
    render: ({...args}) => <Stack {...args}>{createChildren(args.amountOfChildren)}</Stack>,
};

export const Semantic: Story = {
    args: {
        orientation: 'horizontal',
        amountOfChildren: 3,
        as: 'nav',
        'aria-label': 'Main navigation',
        gap: '3',
    },
    render: ({...args}) => <Stack {...args}>{createChildren(args.amountOfChildren)}</Stack>,
};

const createChildren = (numberOfChildren: number) => {
    return Array(numberOfChildren)
      .fill(null)
      .map((_, index) => {
        return (
          <div
            key={index}
            style={{ width: 100, height: 100, backgroundColor: 'green' }}
          />
        );
      });
  };