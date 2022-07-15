import "./App";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
 
import CreateUser from "./components/create-user.component";
import CreatePianoSession from "./components/create-piano-session.component.js";
import PianoLog from "./components/piano-log.component.js";
import Navbar from "./components/navbar.component.js"
import EditPianoSession from "./components/edit-piano-session.component.js";

function App() {
 return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={PianoLog} />
        <Route path="/edit/:id" component={EditPianoSession} />
        <Route path="/create" component={CreatePianoSession} />
        <Route path="/user" component={CreateUser} />
      </div>
   </Router>
 );
}
 
export default App;