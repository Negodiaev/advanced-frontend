import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useInput } from 'shared/hooks';
import { Input } from 'shared/ui/Input/Input';

export default function MainPage() {
  const { t } = useTranslation('main');
  const { value, handleChange } = useInput('');

  return (
    <div>
      <h1>{t('Home page')}</h1>
      <p>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores deleniti ipsa omnis ullam?!')}</p>
      <p>{t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur eligendi error excepturi hic impedit nesciunt, obcaecati omnis perferendis recusandae repellendus repudiandae. Nobis, odit.')}</p>
      <Counter />
      <br />
      <Input value={value} onChange={handleChange} />
      <br />
      <BugButton />
    </div>
  );
}
