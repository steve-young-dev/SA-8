import React from 'react';

function CurrentAttendees(props) {
  return (

    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {props.state.map((attendee, i) => {
        if (attendee.skillLevel === 'beginner') {
          return <div key={i}>{attendee.firstName} {attendee.lastName}</div>
        }
      })}
      <h3>Intermediate</h3>
      {props.state.map((attendee, i) => {
        if (attendee.skillLevel === 'intermediate') {
          return <div key={i}>{attendee.firstName} {attendee.lastName}</div>
        }
      })}
      <h3>Expert</h3>
      {props.state.map((attendee, i) => {
        if (attendee.skillLevel === 'expert') {
          return <div key={i}>{attendee.firstName} {attendee.lastName}</div>
        }
      })}
    </div>
  )
}

export default CurrentAttendees;