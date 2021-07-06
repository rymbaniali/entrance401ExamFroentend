
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Fav from './components/Fav'


class App extends React.Component {

  render() {
    return (
      <>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">Home
            <Home/>
            </Route>

            <Route exact path="/fav">Favorites
              <Fav/>
            </Route>
          </Switch>
          <Footer />
        </Router>

      </>
    )
  }
}

export default App;