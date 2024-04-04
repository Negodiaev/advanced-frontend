import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'shared/ui/Link';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';

import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation('navbar');
  const [isAuthVisible, setAuthVisible] = useState(false);

  const handleShowAuth = useCallback(() => {
    setAuthVisible(true);
  }, []);

  const handleHideAuth = useCallback(() => {
    setAuthVisible(false);
  }, []);

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <a href="/" className={styles.logo}>{t('Logo')}</a>
      <div className={styles.colRight}>
        <nav>
          <ul className={styles.menu}>
            <li><Link to="/">{t('Home')}</Link></li>
            <li><Link to="/about">{t('About')}</Link></li>
          </ul>
        </nav>
        <Button variant={ButtonVariant.CONTAINED_INVERTED} onClick={handleShowAuth}>{t('Log in')}</Button>
      </div>
      <LoginModal isOpen={isAuthVisible} onClose={handleHideAuth} />
    </div>
  );
}
