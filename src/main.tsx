import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './GlobalStyles.tsx';
import { Provider, useSelector } from 'react-redux'
import { store } from './redux/Store/store.tsx'
import { ThemeProvider } from 'styled-components';

const AppWrapper = () => {
  const isDarkMode = useSelector((state: any) => state.darkMode.mode);
  
  return (
    <ThemeProvider theme={{ dark: isDarkMode }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
)
