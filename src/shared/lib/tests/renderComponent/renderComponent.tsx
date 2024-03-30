import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import i18nForTesting from 'shared/config/i18n/i18nForTesting';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface IRenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
}

export function renderComponent(component: ReactNode, options: IRenderComponentOptions = {}) {
  const { route = RoutePath.main, initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTesting}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
