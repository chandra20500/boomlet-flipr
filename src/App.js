import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Home from './Home';
import CreateInfluancer from './pages/CreateInfluancer';
import Influencer from './pages/manage-influencer'
import Proposal_app from './pages/manage_proposal'
import CreateCampaign from './pages/create_campaign.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/create-influancer'} component={CreateInfluancer} />
          <Route path={'/manage-influencer'} component={Influencer} />
          <Route path={'/manage-proposal'} component={Proposal_app} />
          <Route path={'/create-campaign'} component={CreateCampaign} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
