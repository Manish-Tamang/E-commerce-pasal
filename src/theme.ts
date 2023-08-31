import { extendTheme } from '@chakra-ui/react';
import { buildLegacyTheme } from 'sanity';

export const colors = {
  brand: {
    primary: 'rgb(214, 123, 255)',
    primaryLight: 'rgb(255, 182, 217)',
    primaryDark: 'rgb(214, 123, 255)',
  },
};

export const theme = extendTheme({ colors });

const props = {
  '--ms-white': '#fff',
  '--ms-black': '#1a1a1a',
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark,
  '--ms-gray': '#666666',
};

export const msTheme = buildLegacyTheme({
  '--black': props['--ms-black'],
  '--gray': props['--ms-gray'],

  '--focus-color': props['--brand-primary-dark'],

  '--brand-primary': props['--brand-primary'],

  '--component-bg': props['--ms-white'],
  '--component-text-color': props['--ms-black'],

  '--default-button-color': props['--ms-gray'],
  '--default-button-primary-color': props['--brand-primary'],

  '--state-info-color': props['--brand-primary-light'],
});
