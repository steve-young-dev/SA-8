import React from 'react';

function Form(props) {
  return (
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <label>First Name:
  <input type="text" name="firstName" value={props.state.firstName} onChange={props.onChange}></input>
      </label>
      <label>Last Name:
  <input type="text" name="lastName" value={props.state.lastName} onChange={props.onChange}></input>
      </label>
      <label>Email:
  <input type="text" name="email" value={props.state.email} onChange={props.onChange}></input>
      </label>
      <label>Shirt Size:
  <select type="text" name="shirt" value={props.state.shirt} onChange={props.onChange}>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </label>
      <label>Skill Level:
  <select type="radio" name="skillLevel" value={props.state.skillLevel} onChange={props.onChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </label>
      <button onClick={props.onSubmit}>REGISTER</button>
    </div>
  )
}


export default Form;