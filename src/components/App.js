import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import AppLayout from './AppLayout';
import LandingPage from './LandingPage';
import Room from './Products/Room';
import LivingRoom from './Products/LivingRoom';
import Kitchen from './Products/Kitchen';
import Store from './Company/Store';
import Notice from './Company/Notice';
import Promotion from './Company/Promotion';

function App() {
  return (
    <Router>
      <AppLayout>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/room' component={Room} />
        <Route exact path='/livingRoom' component={LivingRoom} />
        <Route exact path='/kitchen' component={Kitchen} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/notice' component={Notice} />
        <Route exact path='/promotion' component={Promotion} />
      </AppLayout>
    </Router>
  )
}

export default App
