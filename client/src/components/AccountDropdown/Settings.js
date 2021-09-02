import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, ImageListItemBar, ThemeProvider, createTheme, Card, Avatar } from '@material-ui/core';
import useStyles from './SettingsStyle';
import axios from 'axios';
import Community from '../Community/Community';
import AccountCircle from '@material-ui/icons/AccountCircle';

function Settings() {
  const state = {
    community: zipcode
  }
  const AUTH = JSON.parse(localStorage.getItem('profile'))

  const [ zipcode, changeZipcode ] = useState(AUTH.community)
  const [ input, changeInput ] = useState(state);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#457F96',
      },
      secondary: {
        main: '#32BCAC',
      }
    },
    typography: {
      h3: {
        fontSize: 36,
        marginTop: 30,
      },
      h4: {
        fontSize: 24,
        marginTop: 20,
      },
      h5: {
        fontSize: 16
      }
    },
    textField: {
      margin: 15
    },
  })

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
    <Card className={classes.card}
    variant="outlined">
    <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
        >Personal Info
        </Typography>

        <Typography
          variant="h5"
          className={classes.pos}
        >Info about you and your settings across Neighbr services
        </Typography>

        <div>
        {AUTH.user.photoURL ? <Avatar src={AUTH.user.photoURL} className={classes.large}/> : <AccountCircle className={classes.large}/>}
        </div>

        <Typography
         variant="h4"
         className={classes.pos}
        >Basic Info
        </Typography>

        <TextField
            className={classes.pos}
            onChange={handleChange}
            disabled={true}
            label="Name"
            id="name"
            defaultValue={AUTH.user.displayName}
            variant="outlined"
          />

        <TextField
          className={classes.pos}
          onChange={handleChange}
          disabled={true}
          label="Email"
          id="email"
          defaultValue={AUTH.user.email}
          variant="outlined"
        />

        <Typography
         className={classes.pos}
         variant="h4"
        >Change Location
        </Typography>

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
            variant="contained"
            color="primary"
            className={classes.save}
            >
              Save
          </Button>
          {/* <Community /> */}
    </ThemeProvider>
    </Card>
    </div>
  )
}

export default Settings;