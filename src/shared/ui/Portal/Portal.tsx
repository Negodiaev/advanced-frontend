import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    container?: HTMLElement;
}

export const Portal: FC<IPortalProps> = ({ container = document.body, children }) => createPortal(children, container);
