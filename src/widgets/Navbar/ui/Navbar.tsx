import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'shared/ui/Link';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation('navbar');

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
      </div>
    </div>
  );
}
