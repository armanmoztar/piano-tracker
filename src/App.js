import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from “react-router-dom”;
 

import CreateUser from "./components/create-user.component";
import CreatePianoSession from "./components/create-piano-session.component";
import PianoLog from "./components/piano-log.component";
import Navbar from "./components/navbar.component"
import EditPianoSession from "./components/edit-piano-session.component";


function App() {
 return (
   <div className="container">
     <Navbar />
    <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
   </div>
 );
}
 
export default App;