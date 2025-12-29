import type { ComponentProps } from "react";
import type { Meta } from "@storybook/react-vite";
import { Modal } from "../components/modal/Modal";
import './stories.css';

type StoryProps = ComponentProps<typeof Modal> & {
    modalTitle: string;
    modalContent: string;
    modalFooter: string;
};


const meta: Meta<StoryProps> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        modalTitle: {
            control: 'text',
            description: 'Title of the modal',
        },
    },
};

export default meta;