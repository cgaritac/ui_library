import type { ComponentProps } from "react";
import { Stack } from "../components/stack/stack";
import type { Meta, StoryObj } from "@storybook/react-vite";
import './stories.css';

type StoryProps = ComponentProps<typeof Stack> & {
    amountOfChildren: number;
};

const meta: Meta<StoryProps> = {
    title: 'Components/Stack',
    component: Stack,
    argTypes: {
        amountOfChildren: { control: 'number' },
        orientation: { control: 'select', options: ['horizontal', 'vertical'] },
        gap: { control: 'select', options: ['1', '2', '3', '4', '5'] },
        backgroundColor: { control: 'color' },
        height: { control: 'text' },
        width: { control: 'text' },
        borderRadius: { control: 'text' },
        padding: { control: 'text' },
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

function createChildren(numberOfChildren: number) {
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
  }