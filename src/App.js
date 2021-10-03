import React from 'react';
import {Route, Switch } from 'react-router';
import './default.scss'

//pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';

//layouts
import MainLayout from './Layouts/MainLayout';
import HomepageLayout from './Layouts/HomepageLayout';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" render={() => 
          <HomepageLayout>
            <HomePage/>
          </HomepageLayout>
          } />
        <Route path="/registration" render={()=>
          <MainLayout>
            <Registration/>
          </MainLayout>
          } />
        </Switch>
    </div>
  );
}

export default App;
