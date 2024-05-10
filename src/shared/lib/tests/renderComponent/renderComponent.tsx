import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import i18nForTesting from '../../../config/i18n/i18nForTesting';
import { RoutePath } from '../../../config/routeConfig/routeConfig';

export interface IRenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
}

export function renderComponent(component: ReactNode, options: IRenderComponentOptions = {}) {
  const { route = RoutePath.main, initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTesting}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
