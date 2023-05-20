import * as React from 'react';
import { AppRegistry } from 'react-native';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {name as AppName} from './app.json'
import App from './App';

export default function Main() {
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#10815C',
          secondary: '#FBAF57',
        },
      };

  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(AppName, () => Main);