import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';

interface ILangSwitcherProps {
    isShort?: boolean;
    className?: string;
}

export const LangSwitcher = memo(({ isShort = false, className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }, [i18n]);

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleLang}
    >
      {t(!isShort ? 'Language' : 'Short lang')}
    </Button>
  );
});
