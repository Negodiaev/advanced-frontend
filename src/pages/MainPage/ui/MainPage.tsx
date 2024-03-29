import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('Home page')}</h1>
      <p>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores deleniti ipsa omnis ullam?!')}</p>
      <p>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur eligendi error excepturi hic impedit nesciunt, obcaecati omnis perferendis recusandae repellendus repudiandae. Nobis, odit.')}</p>
      <BugButton />
    </div>
  );
}
