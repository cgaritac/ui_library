import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "../components/modal/Modal";
import './stories.css';
import { fn } from "storybook/test";

type StoryProps = ComponentProps<typeof Modal> & {
    title: string;
    open: boolean;
    onClose: () => void;
    'aria-label': string;
    'aria-labelledby': string;
    'aria-describedby': string;
    role: string;
    children: React.ReactNode;
};

const meta: Meta<StoryProps> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the modal',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Modal' },
            },
        },
        open: {
            control: 'boolean',
            description: 'Whether the modal is open',
        },
        onClose: {
            action: 'closed',
            description: 'Callback function triggered when the modal is closed',
            table: {
                type: { summary: '() => void' },
                defaultValue: { summary: 'undefined' },
            },
        },
        'aria-label': {
            control: 'text',
            description: 'Accessibility label that describes the purpose of the modal',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        'aria-labelledby': {
            control: 'text',
            description: 'Accessibility label that describes the purpose of the modal',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        'aria-describedby': {
            control: 'text',
            description: 'Accessibility label that describes the purpose of the modal',
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
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        title: 'Modal Title',
        open: true,
        onClose: fn(),
        'aria-label': 'Modal',
        'aria-labelledby': 'Modal',
        'aria-describedby': 'Modal',
        role: 'dialog',
        children: <div>
            <h3>Modal Content</h3>
            <p>This is the content of the modal.</p>
            <button onClick={fn()}>Close</button>
        </div>,
    },
    parameters: {
        docs: {
            description: {
                component: 'A modal component that allows the user to view and interact with a modal.',
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