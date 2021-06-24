import React, { useState, useEffect } from 'react';
import './App.css';
import TableData from './components/Table/Table';
import ThemeContext, {themes} from './components/Context/ThemeContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Countrypage from './components/CountryPage'
import Nav from './components/Headers/Nav';



function App() { 
  const toSave= () => {
    const checkTheme = localStorage.getItem('data-theme');
    return checkTheme  ? JSON.parse(checkTheme): themes.dark;
  }; 
  const [theme, setTheme] = useState(toSave())

  const context = { theme, setTheme };  

  useEffect(() => {
    window.localStorage.setItem('data-theme', JSON.stringify(theme));
  }, [theme])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <ThemeContext.Provider value={context}>
            <Route exact path="/">
              <Nav />
              <TableData />
            </Route>
            </ThemeContext.Provider>
            <Route exact path="/:countryName" component={Countrypage} >
              <Countrypage />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;


