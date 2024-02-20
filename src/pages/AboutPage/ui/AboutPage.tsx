import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('About page')}</h1>
      <p>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores deleniti ipsa omnis ullam? Accusamus ad, asperiores consequuntur cumque distinctio dolore doloremque ex in labore nihil nobis, quibusdam quos rerum saepe tenetur!')}</p>
    </div>
  );
}
