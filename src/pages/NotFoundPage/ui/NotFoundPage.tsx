import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string;
}

export default function NotFoundPage({ className }: INotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {t('The page was not found')}
    </div>
  );
}
