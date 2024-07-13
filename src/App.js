import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-listing/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Entry} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/add-ticket" component={AddTicket} />
            <PrivateRoute path="/tickets" component={TicketLists} />
            <PrivateRoute path="/ticket/:tid" component={Ticket} />
          </Switch>
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
