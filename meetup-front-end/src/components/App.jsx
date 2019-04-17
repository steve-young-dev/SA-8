import React from 'react';
import axios from 'axios';

import Form from './Form.jsx';
import CurrentAttendees from './currentAttendees.jsx';

class App extends React.Component {
  // YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      attendee: {
        "firstName": "",
        "lastName": "",
        "email": "",
        "shirt": "S",
        "skillLevel": "beginner"
      }
    };
    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.updateRoster = this.updateRoster.bind(this);
  }

  componentDidMount() {
    this.updateRoster()
  }

  updateRoster() {
    axios.get('/attendees')
      .then((response) => {
        this.setState({ roster: response.data })
      })
  }

  //need to chagne to create a new object on change
  formChange(event) {
    let newAttendee = Object.assign({}, this.state.attendee);
    newAttendee[event.target.name] = event.target.value;
    this.setState({ attendee: newAttendee });
  }

  formSubmit() {
    event.preventDefault();
    let clearAttendee = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "shirt": "S",
      "skillLevel": "beginner"
    }
    axios.post('/attendees', this.state.attendee)
      .then(() => {
        this.updateRoster()
      })
      .then(() => {
        this.setState({ attendee: clearAttendee })
      })

  }

  render() {
    return (
      <div className="main">
        <CurrentAttendees state={this.state.roster}></CurrentAttendees>
        <Form state={this.state.attendee} onChange={this.formChange} onSubmit={this.formSubmit}></Form>
      </div>
    )

  }

}

export default App;
