import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PianoSession = props => (
  <tr>
    <td>{props.pianoSession.username}</td>
    <td>{props.pianoSession.description}</td>
    <td>{props.pianoSession.duration}</td>
    <td>{props.pianoSession.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.pianoSession._id}>Edit</Link> | <a href="#" onClick={() => { props.deletePianoSession(props.pianoSession._id) }}>Delete</a>
    </td>
  </tr>
)

export default class PianoLog extends Component {
  // Constructor to initialize the state with an empty pianoLog array
constructor(props) {
  super(props);
  this.deletePianoSession = this.deletePianoSession.bind(this);
  this.state = {pianoLog: []};
  }

  // Get the piano logs from the database
  // Code will run before page is rendered
  componentDidMount() {
  axios.get('http://localhost:3000/piano-log/')
   .then(response => {
     this.setState({ pianoLog: response.data });
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
    pianoLog: this.state.pianoLog.filter(el => el._id !== id)
    })
  }

  // Iterates through the list of piano log items by using the map function
  // and returns the rows of the table
  pianoLog() {
    return this.state.pianoLog.map(currentpianosession => {
      return <PianoSession pianoSession={currentpianosession} deletePianoSession={this.deletePianoSession} key={currentpianosession._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Piano Sessions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration (minutes)</th>
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