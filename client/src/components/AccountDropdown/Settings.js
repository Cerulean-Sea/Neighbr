import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import useStyles from './SettingsStyle';
import axios from 'axios';

function Settings() {
  const state = {
    community: zipcode
  }
  const AUTH = JSON.parse(localStorage.getItem('profile'))

  const [ zipcode, changeZipcode ] = useState(AUTH.community)
  const [ input, changeInput ] = useState(state);

  useEffect(() => {
    axios.get(`/api/users/community/${AUTH.user.uid}`)
      .then(function (response) {
        changeZipcode(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  })

  const handleSave = (e) => {
    e.preventDefault();
    axios.patch(`/api/users/community/${AUTH.user.uid}`, input)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e) => {
    changeInput({
      community: e.target.value
    })
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Edit Account Information</h1>
      <h2>Account Information</h2>
      <div>Name</div>
      <div>{AUTH.user.displayName}</div>
      <div>Email</div>
      <div>{AUTH.user.email}</div>

      <h2>Change Location</h2>

      <form className={classes.form}>

        <TextField
          onChange={handleChange}
          label="Zipcode"
          id="outlined-size-normal"
          defaultValue={zipcode}
          variant="outlined"
        />

        <Button
          type="input"
          onClick={handleSave}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.save}
          >
            Save
        </Button>
      </form>
    </div>
  )
}

export default Settings;