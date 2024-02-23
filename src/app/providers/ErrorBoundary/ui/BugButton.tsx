import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button';

// This component is only for testing
export function BugButton() {
  const { t } = useTranslation('error-boundary');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const throwError = () => {
    setError(true);
  };

  return (
    <Button variant={ButtonVariant.OUTLINED} onClick={throwError}>{t('Throw Error')}</Button>
  );
}
