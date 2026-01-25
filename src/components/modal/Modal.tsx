import React, { useEffect, useRef, type PropsWithChildren } from 'react';
import './modal.css';

export type ModalProps = PropsWithChildren<{
    open: boolean;
    onClose: () => void;
    title?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    role?: string;
}>;

export const Modal: React.FC<ModalProps> = ({ 
    open,
    onClose,
    title = 'Modal',
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    role,
}: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open) {
            dialog.showModal();
            dialog.focus();
        } else {
            dialog.close();
        }
    },[open]);

    useEffect(() => {
        const dialog = dialogRef.current;

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };

        dialog?.addEventListener('cancel', handleCancel);
        return () => dialog?.removeEventListener('cancel', handleCancel);
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === e.currentTarget){
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            role={role}
            onClick={handleBackdropClick}
            className="cgc-modal"
        >
            <h2>{title}</h2>
            {children}

        </dialog>
    );
};