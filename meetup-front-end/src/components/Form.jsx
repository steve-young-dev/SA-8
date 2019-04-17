import React from 'react';

function Form(props) {
  return (
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <label>First Name:
  <input type="text"></input>
      </label>
      <label>Last Name:
  <input type="text"></input>
      </label>
      <button>REGISTER</button>
    </div>
  )
}
{/* <div class="main">

  <div class="attendees">
    <h2>Attendees</h2>
    <h3>Beginner</h3>
    <div>Hoban Washburn</div>
    <div>Jayne Cobb</div>
    <h3>Intermediate</h3>
    <div>Zoe Washburn</div>
    <h3>Expert</h3>
    <div>Malcom Reyolds</div>
    <div>Kaylee Frye</div>
  </div>
</div> */}

export default Form;