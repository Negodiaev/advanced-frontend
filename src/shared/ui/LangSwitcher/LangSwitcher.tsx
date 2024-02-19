import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonVariant} from "shared/ui/Button";
import styles from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
    className?: string;
}

export function LangSwitcher({className}: ILangSwitcherProps) {
    const {t, i18n} = useTranslation();

    function toggleLang() {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            variant={ButtonVariant.CLEAR}
            className={classNames(styles.root, {}, [className])}
            onClick={toggleLang}
        >
            {t('Language')}
        </Button>
    );
}