import React, { useState } from 'react';
import { TextField, RaisedButton, withStyles, InputBase, FormControl, InputLabel } from '@material-ui/core';

function Settings() {
  const state = {
    firstName: '',
    lastName : '',
    email : '',
    zipcode : '',
  }

  const AUTH = JSON.parse(localStorage.getItem('profile'))

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  return (
    <div>
      <h1>Edit Account Information</h1>
      <h2>Account Information</h2>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
        hintText="First Name *:"
        floatingLabelText={AUTH.user.displayName}
        // handleChange={handleChange()
        />
        <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined" />

      <FormControl className={classes.margin}>
        <InputLabel
        shrink htmlFor="bootstrap-input"
        defaultValue={AUTH.user.displayName}
        >
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>

      </form>

      {/* </div> */}
    </div>
  )
}

export default Settings;