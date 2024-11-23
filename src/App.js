import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppContext from './AppContext';
import MainApp from './MainApp';
// import GlobalStyles from './theme/GlobalStyles';

function App() {
  window.matchMedia = null;
  // const darkMode = useDarkMode(true);

  return (
    // <AppContext.Provider value={{ darkMode }}>
    <AppContext.Provider >
      {/* <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}> */}
        {/* <GlobalStyles /> */}
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      {/* </ThemeProvider> */}
    </AppContext.Provider>
  );
}

export default App;
