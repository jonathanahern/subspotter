import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from "react-router-dom";
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Sidebar from './nav/sidebar';
import SpotsFormContainer from './spots/spots_form_container';
import WallContainer from './wall/wall_container';
import MapContainer from './map/map_container';

const App = () => (
  <div>
    <Sidebar />
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/spots/create" component={SpotsFormContainer} />
        <Route exact path="/wall" component={WallContainer} />
        <Route exact path="/map" component={MapContainer} />
    </Switch>
  </div>
);

export default App;