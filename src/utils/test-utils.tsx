import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import AllTheProviders from './AllTheProviders';

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
