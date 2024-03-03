import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'shared/ui/Link';
import { Modal } from 'shared/ui/Modal';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation('navbar');
  const [isAuthVisible, setAuthVisible] = useState(false);

  const handleToggleAuthVisibility = useCallback(() => {
    setAuthVisible((prevState) => !prevState);
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
        <Button variant={ButtonVariant.CONTAINED_INVERTED} onClick={handleToggleAuthVisibility}>{t('Log in')}</Button>
      </div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthVisible} onClose={handleToggleAuthVisibility}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam
        asperiores cumque delectus dolore dolorum eius nulla quasi tempore vitae! Consectetur doloremque eius ex
        facere inventore iusto quaerat quibusdam quisquam recusandae voluptas!
      </Modal>
    </div>
  );
}
