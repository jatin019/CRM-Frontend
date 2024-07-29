import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import { Registration } from './pages/registration/Registration.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-listing/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route exact path="/registration" component={Registration} />
          <DefaultLayout>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/add-ticket" component={AddTicket} />
              <PrivateRoute path="/tickets" component={TicketLists} />
              <PrivateRoute path="/ticket/:tid" component={Ticket} />
            </Switch>
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
