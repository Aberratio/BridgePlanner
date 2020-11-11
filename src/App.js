import React from 'react';
import { HashRouter, Switch,  Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateSimpleCard from './components/projects/CreateSimpleCard';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/basic/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/simple' component={CreateSimpleCard} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
