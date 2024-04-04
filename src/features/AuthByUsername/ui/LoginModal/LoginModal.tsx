import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

import styles from './LoginModal.module.scss';

interface ILoginModalProps {
    isOpen: boolean;
    className?: string;
    onClose: () => void;
}

export function LoginModal({ isOpen, className, onClose }: ILoginModalProps) {
  const { t } = useTranslation('auth');

  return (
    <Modal isOpen={isOpen} lazy className={classNames('', {}, [className])} onClose={onClose}>
      <div className={styles.root}>
        <h3 className={classNames(styles.title, {}, [styles.root__title])}>{t('Log in')}</h3>
        <LoginForm />
      </div>
    </Modal>
  );
}
