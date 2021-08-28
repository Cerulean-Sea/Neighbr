import React, { useState } from 'react'
import {
  Avatar, Button, CssBaseline, TextField,
  FormControlLabel, Checkbox, Link, Grid,
  Box, Typography,
  Container } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import axios from 'axios';
import useStyles from './styleLogin';
import SignUp from '../Signup/SignUp';

export default function Login() {
  const classes = useStyles();
  const [ email, setEmail ] = useState('');
  const [ pass, setPass ] = useState('');

  const handleSignIn = () => {
    axios.post('/api/users/signin',{ email, pass })
    .then(res => res)
    .catch(err => console.error(err))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
            >
          <TextField
            onChange={(e) => setEmail( e.target.value ) }
            value={email}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="input"
            onClick={handleSignIn}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <SignUp />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
