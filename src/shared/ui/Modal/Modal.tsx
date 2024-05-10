import {
  FC, MouseEvent, useCallback, useEffect, useState,
} from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, TMods } from '../../lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';

interface IModalProps {
    isOpen: boolean;
    lazy?: boolean;
    className?: string;
    onClose: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const {
    isOpen, children, lazy = false, className, onClose,
  } = props;
  const { theme } = useTheme();

  const [isMounted, setMounted] = useState(false);

  const rootMods: TMods = {
    [styles.root_opened]: isOpen,
  };

  const contentMods: TMods = {
    [styles.content_visible]: isOpen,
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setMounted(isOpen);
    }
  }, [isOpen]);

  function handleClose() {
    onClose();
  }

  function handleContentClick(e: MouseEvent) {
    e.stopPropagation();
  }

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.root, rootMods, [className, theme])}>
        <div className={styles.overlay} aria-hidden="true" onClick={handleClose}>
          <div
            className={classNames(styles.content, contentMods)}
            aria-hidden="true"
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
