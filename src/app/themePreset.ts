import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const ThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e6eefa',
      100: '#c8d8ef',
      200: '#a9c1e3',
      300: '#7a9fd1',
      400: '#4d7dbf',
      500: '#2a5fae',
      600: '#204b8c',
      700: '#18396b',
      800: '#10274a',
      900: '#09152a',
      950: '#040a14',
    },
  },
});

export { ThemePreset };
