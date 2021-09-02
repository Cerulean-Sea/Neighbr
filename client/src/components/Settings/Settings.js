import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Grid, Typography, ImageListItemBar, ThemeProvider, createTheme, Card, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import useStyles from './SettingsStyle';
import { updateCommunity } from '../../redux/actions/firebase/firebase';

function Settings() {

  const AUTH = useSelector((state) => state.firebase);
  const userId = AUTH?.user?.uid;
  const dispatch = useDispatch();
  const history = useHistory();

  const [community, setCommunity] = useState('');

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
    setCommunity(AUTH?.community);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCommunity(history, userId, community));
  };

  const handleChange = (e) => {
    setCommunity(e.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Card className={classes.card}
    variant="outlined">
    <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          align="center"
        >Personal Info
        </Typography>

        <Typography
          variant="h5"
          className={classes.pos}
          align="center"
        >Info about you and your settings across Neighbr services
        </Typography>

        <div>
        {AUTH?.user?.photoURL ? <Avatar src={AUTH?.user?.photoURL} className={classes.large}/> : <AccountCircle className={classes.large}/>}
        </div>

        <Typography
         variant="h4"
         className={classes.pos}
         align="center"
        >Basic Info
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container direction="column">

              <TextField
                  className={classes.pos}
                  onChange={handleChange}
                  disabled={true}
                  label="Name"
                  id="name"
                  defaultValue={AUTH?.user?.displayName}
                  variant="outlined"
                />

            <TextField
              className={classes.pos}
              onChange={handleChange}
              disabled={true}
              label="Email"
              id="email"
              defaultValue={AUTH?.user?.email}
              variant="outlined"
            />

            <Typography
            className={classes.pos}
            variant="h4"
            align="center"
            >Change Location
            </Typography>

              <TextField
                onChange={handleChange}
                label="Zipcode"
                id="outlined-size-normal"
                value={community || ''}
                variant="outlined"
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.save}
                >
                  Save
              </Button>
            </Grid>
          </form>
    </ThemeProvider>
    </Card>
    </div>
  )
}

export default Settings;