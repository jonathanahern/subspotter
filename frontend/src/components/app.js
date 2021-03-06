import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from "react-router-dom";
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './nav/footer';
import WallContainer from './wall/wall_container';
import MapContainer from './map/map_container';
import SpotsContainer from './spots/spots_container';
import SpotFormContainer from './spots/spot_form_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <>
    <NavBarContainer />
    <Switch>
      <Route exact path="/wall" component={WallContainer} />
      <Route exact path="/map" component={MapContainer} />
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
      <ProtectedRoute exact path="/spots/create" component={SpotFormContainer} />    
      <Route exact path="/spots" component={SpotsContainer} />
      <Route exact path="/spotter" component={ProfileContainer} />
    </Switch>
    <Footer/>
  </>
);

export default App;