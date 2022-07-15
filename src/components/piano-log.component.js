import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PianoSession = props => (
  <tr>
    <td>{props.pianosession.username}</td>
    <td>{props.pianosession.description}</td>
    <td>{props.pianosession.duration}</td>
    <td>{props.pianosession.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.pianosession._id}>edit</Link> | <a href="#" onClick={() => { props.deletePianoSession(props.pianosession._id) }}>delete</a>
    </td>
  </tr>
)

export default class PianoLog extends Component {
  // Constructor to initialize the state with an empty pianolog array
constructor(props) {
  super(props);
  this.deletePianoSession = this.deletePianoSession.bind(this);
  this.state = {pianolog: []};
  }

  // Get the piano logs from the database
  // Code will run before page is rendered
  componentDidMount() {
  axios.get('http://localhost:3000/piano-log/')
   .then(response => {
     this.setState({ pianolog: response.data });
   })
   .catch((error) => {
      console.log(error);
   })
  }

  // Component will allow users to delete piano logs
  deletePianoSession(id) {
  axios.delete('http://localhost:3000/piano-log/'+id)
    .then(res => console.log(res.data));
  this.setState({
    pianolog: this.state.pianolog.filter(el => el._id !== id)
    })
  }

  // Iterates through the list of piano log items by using the map function
  // and returns the rows of the table
  pianoLog() {
    return this.state.pianolog.map(currentpianosession => {
      return <PianoSession pianosession={currentpianosession} deletePianoSession={this.deletePianoSession} key={currentpianosession._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Piano Dates</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            { this.pianoLog() }
          </tbody>
        </table>
      </div>
    )
  }
}