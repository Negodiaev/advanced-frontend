import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData, userActions } from 'entities/User';
import { Link } from 'shared/ui/Link';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';

import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation('navbar');
  const dispatch = useDispatch();
  const [isAuthVisible, setAuthVisible] = useState(false);
  const authData = useSelector(getUserAuthData);

  const handleShowAuth = useCallback(() => {
    setAuthVisible(true);
  }, []);

  const handleHideAuth = useCallback(() => {
    setAuthVisible(false);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
        {authData
          ? (
            <Button
              variant={ButtonVariant.OUTLINED}
              onClick={handleLogout}
            >
              {t('Log out')}
            </Button>
          ) : (
            <>
              <Button
                variant={ButtonVariant.CONTAINED_INVERTED}
                onClick={handleShowAuth}
              >
                {t('Log in')}
              </Button>
              <LoginModal isOpen={isAuthVisible} onClose={handleHideAuth} />
            </>
          )}
      </div>
    </div>
  );
});
