import {
  FC, MouseEvent, useCallback, useEffect,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import styles from './Modal.module.scss';

interface IModalProps {
    isOpen: boolean;
    className?: string;
    onClose: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const {
    isOpen, children, className, onClose,
  } = props;
  const { theme } = useTheme();

  const rootMods: Record<string, boolean> = {
    [styles.root_opened]: isOpen,
  };

  const contentMods: Record<string, boolean> = {
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

  function handleClose() {
    onClose();
  }

  function handleContentClick(e: MouseEvent) {
    e.stopPropagation();
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
