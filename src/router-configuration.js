import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Museum from './pages/museums/Museum';
import AddMuseum from './pages/museums/AddMuseum';
import DeleteMuseum from './pages/museums/DeleteMuseum';
import UpdateMuseum from './pages/museums/UpdateMuseum';

const RouteConfiguration = () => (
  <Router>
    <div>
      <Route exact path="/" component={Museum}/>
      <Route path="/museum/add" component={AddMuseum}/>
      <Route path="/museum/delete" component={DeleteMuseum}/>
      <Route path="/museum/update/:value" component={UpdateMuseum}/>
    </div>
  </Router>
);
/* 
ROUTE CONFIGURATION

      <Route path="/museum/add" component={AddMuseum}/>
      <Route path="/museum/delete" component={DeleteMuseum}/>
      <Route path="/museum/update/:value" component={UpdateMuseum}/>
      <Route path="/museum_gallery" component={MuseumGallery}/>
      <Route path="/museum_gallery/add" component={AddMuseumGallery}/>
      <Route path="/museum_gallery/delete" component={DeleteMuseumGallery}/>
      <Route path="/museum_gallery/update/:value" component={UpdateMuseumGallery}/>
      <Route path="/users" component={SEAMuseumUsers}/>

*/
/*
const RouteConfiguration = () => (
  <Router>
    <div>
      <Route exact path="/" component={MuseumTable}/>
      <Route path="/museum/add"  component={MuseumForm}/>
      <Route path="/museum/update/:value"  component={MuseumForm}/>
    </div>
  </Router>
);
*/
export default RouteConfiguration;