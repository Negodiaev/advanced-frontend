import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import styles from './PageError.module.scss';

interface IPageErrorProps {
    className?: string;
}

export function PageError({ className }: IPageErrorProps) {
  const { t } = useTranslation('error-boundary');

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <p>
        {t('Something went wrong')}
        ...
      </p>
      <Button onClick={reloadPage}>{t('Reload page')}</Button>
    </div>
  );
}
