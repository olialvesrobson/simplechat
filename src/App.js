import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import ChatRoom from './components/chatRoom/Chat';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/layout/Navbar';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignOut' component={SignOut} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/ChatRoom' component={ChatRoom} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}


export default App;
