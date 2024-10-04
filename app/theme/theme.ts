// /theme/theme.ts
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff5722',  // Un color naranja intenso
    accent: '#4caf50',   // Un verde más suave
    background: '#121212', // Fondo oscuro
    surface: '#37474f',   // Superficie gris oscuro
    text: '#ffffff',      // Texto blanco
    placeholder: '#b0bec5', // Placeholder gris claro
  },
};
