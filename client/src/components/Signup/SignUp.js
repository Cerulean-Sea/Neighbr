import React, { useState, forwardRef } from 'react';
import { Modal, Link, TextField, Button, Slide } from '@material-ui/core';
import useStyles from './styleSignUp';
import axios from 'axios';

import { emailSignUp } from '../../redux/actions/firebase/firebase';
import { useDispatch } from 'react-redux';


export default function SimpleModal() {

  const classes = useStyles();
  const dispatch = useDispatch();


  // Define Local State and handlers
  const [open, setOpen] = useState(false);
  const [first, setFirstName] = useState('');
  const [last, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [zip, setZip] = useState('')

  const signUp = (e) => {
    e.preventDefault();
    dispatch(emailSignUp(`${first} ${last}`, email, pass, zip));
    handleClose();
  };


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.container} >
      <h2 id="simple-modal-title">Welcome to the Neigbr hood!</h2>
      <form
          className={classes.form}
            >
          <TextField
            onChange={(e) => setFirstName( e.target.value ) }
            value={first}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
          <TextField
            onChange={(e) => setLastName( e.target.value ) }
            value={last}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="lastName"
            id="lastName"
            autoComplete="family-name"
          />
          <TextField
            onChange={(e) => setEmail( e.target.value ) }
            value={email}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
          />
          <TextField
            onChange={(e) => setPass( e.target.value ) }
            value={pass}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            onChange={(e) => setZip( e.target.value ) }
            value={zip}
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="zip"
            label="Zip-Code"
            type="zip"
            id="zip"
            autoComplete="postal-code"
          />
          <Button
            type="input"
            onClick={signUp}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up!
          </Button>
        </form>
    </div>
  );

  return (
    <div>
      <Link href="#" variant="body2" onClick={handleOpen}>
          {"Don't have an account? Sign Up"}
      </Link>
      <Modal
      className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}