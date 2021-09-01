import React, { useState } from 'react';
import { TextField, RaisedButton } from '@material-ui/core';

function Settings() {
  const state = {
    firstName: '',
    lastName : '',
    email : '',
    zipcode : '',
  }


  const AUTH = JSON.parse(localStorage.getItem('profile'))
  // const [ formInput, changeFormInput ] = useState(state);

  // const handleChange = (e) => {
  //   changeFormInput({
  //     [e.target.name]: e.target.value
  //   })
  // }
  // const { firstName, lastName, email, zipcode } = this.state;
  // const values = { firstName, lastName, email, zipcode };


  return (
    <div>
      <h1>Edit Account Information</h1>
      <h2>Account Information</h2>
      {/* <div
        handleChange={this.handleChange}
        values={values}
      > */}
        <TextField
        hintText="First Name *:"
        floatingLabelText={AUTH.user.displayName}
        // handleChange={handleChange()

        />

      {/* </div> */}
    </div>
  )
}

export default Settings;