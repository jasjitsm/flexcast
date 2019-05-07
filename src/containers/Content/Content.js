import React from 'react';
import './Content.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import { PATHS } from 'constants/routes';
import { Discover } from 'pages';

class Content extends React.Component {
  
  render() {
    return (
      <section className="content">
        <Switch>
          <Route path={ PATHS.DISCOVER } render={ () => <Discover></Discover> } />
          <Route path={ PATHS.SUBSCRIPTIONS } render={test => <h1>Subscriptions</h1>}  />
          <Route path={ PATHS.RELEASES } render={test => <h1>Releases</h1>}  />
          <Route path={ PATHS.FAVOURITES } render={test => <h1>Favourites</h1>}  />
          <Route path={ PATHS.DOWNLOADS } render={test => <h1>Downloads</h1>}  />
          <Route path={ PATHS.SETTINGS } render={test => <h1>Settings</h1>}  />
          <Route path={ PATHS.ABOUT } render={test => <h1>About</h1>}  />
          <Redirect from='*' to='/discover'/>
        </Switch>
      </section>
    );
  }

}

export default Content;