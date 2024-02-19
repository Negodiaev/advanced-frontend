import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('Home page')}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores deleniti ipsa omnis
        ullam?!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur eligendi error excepturi hic
        impedit nesciunt, obcaecati omnis perferendis recusandae repellendus repudiandae. Nobis, odit.
      </p>
    </div>
  );
}
