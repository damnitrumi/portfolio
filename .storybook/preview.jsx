import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
import '../public/assets/fonts/styles.css';
import { PageThemeProvider } from '../src/contexts/PageTheme/index'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ],
  },
  layout: 'fullscreen'
};

export const decorators = [
  (Story) => (
    <PageThemeProvider>
      <div style={{height: '200vh'}}>
        <Story />
        <GlobalStyles />
      </div>
    </PageThemeProvider>
  ),
];
