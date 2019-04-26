import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch } from 'react-router';
import Footer from './navigation/Footer';

import Navbar from './navigation/Navbar';
import Details from './page/Details';
import OurWedding from './page/OurWedding';
import Photos from './page/Photos';
import Registry from './page/Registry';
import RSVP from './page/RSVP';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/invite' render={(props) => {
            App.handleInvite(props);
            return <Redirect to='/' />;
          }} />
          <Route exact path='/' component={OurWedding} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/registry' component={Registry} />
          <Route exact path='/rsvp' component={RSVP} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  static handleInvite({ location }) {
    if (/^#[a-fA-F0-9-]{36}$/.test(location.hash)) {
      localStorage.setItem('invitationID', location.hash.substring(1));
    }
  }
}

export default withRouter(App);
