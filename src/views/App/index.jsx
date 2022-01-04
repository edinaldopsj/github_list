import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

import Home from 'views/Home';
import UserDetails from 'views/UserDetails';
import RepoDetails from 'views/RepoDetails';

import GlobalStyles from 'styles/global';
import Theme from 'styles/theme';

import { AppContainer } from './styles';

const App = function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={Theme}>
        <SCThemeProvider theme={Theme}>
          <AppContainer>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:userName/details" element={<UserDetails />} />
              <Route
                path="/user/:userName/repo/:repoName/details"
                element={<RepoDetails />}
              />
            </Routes>
          </AppContainer>
        </SCThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
