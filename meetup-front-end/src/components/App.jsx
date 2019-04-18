import React from 'react';
import axios from 'axios';

import Form from './Form.jsx';
import CurrentAttendees from './currentAttendees.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      updateId: 0,
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
    this.getRoster = this.getRoster.bind(this);
    this.updateRoster = this.updateRoster.bind(this);
    this.deleteAttendee = this.deleteAttendee.bind(this);
  }

  componentDidMount() {
    this.getRoster()
  }

  getRoster() {
    axios.get('/attendees')
      .then((response) => {
        this.setState({ roster: response.data })
      })
  }

  updateRoster(i) {
    let selected = this.state.roster;
    for (let j = 0; j < selected.length; j += 1) {
      if (selected[j].id === i) {
        this.setState({ attendee: selected[j] })
        break;
      }
    }
    this.setState({
      updating: !this.state.updating,
      updateId: i
    });
  }

  deleteAttendee() {
    event.preventDefault();
    let clearAttendee = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "shirt": "S",
      "skillLevel": "beginner"
    }
    axios.delete(`/attendees/${this.state.updateId}`)
      .then(() => {
        this.getRoster()
      })
      .then(() => {
        this.setState({
          attendee: clearAttendee,
          updating: false
        })
      })
  }


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
    if (!this.state.updating) {
      axios.post('/attendees', this.state.attendee)
        .then(() => {
          this.getRoster()
        })
        .then(() => {
          this.setState({ attendee: clearAttendee })
        })
    } else {
      axios.put(`/attendees/${this.state.updateId}`, this.state.attendee)
        .then(() => {
          this.getRoster()
        })
        .then(() => {
          this.setState({
            attendee: clearAttendee,
            updating: false
          })
        })
    }
  }

  render() {
    return (
      <div className="main">
        <CurrentAttendees state={this.state.roster} update={this.updateRoster}></CurrentAttendees>
        <Form state={this.state.attendee} updating={this.state.updating} delete={this.deleteAttendee} onChange={this.formChange} onSubmit={this.formSubmit}></Form>
      </div>
    )

  }

}

export default App;
