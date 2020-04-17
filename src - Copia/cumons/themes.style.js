
import React from 'react';
import { ThemeProvider } from 'styled-components';

export const Themes = {
  Blue: {
    main: '#004B84',
    dark: '#041421',
    accent: '#EA00D9',
    success: '#00DA00',
    warning: '#FFF700',
    error: '#FF0000',
    font: 'Segoe UI',
    color: '#FFF',
    shadow: {
      front: '15px 15px 0px #00000028',
      back: '5px 5px 0px #00000028',
      middle: '10px 10px 0px #00000028',
    }
  }
};

export const Blue = ({ children }) => (
  <ThemeProvider theme={Themes.Blue}>{children}</ThemeProvider>
);
