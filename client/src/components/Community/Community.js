import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, TextField, Button, makeStyles, Grid, Typography } from '@material-ui/core';
import { updateCommunity } from '../../redux/actions/firebase/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formField: {
    margin: theme.spacing(1)
  },
}));

const Community = () => {
  const classes = useStyles();

  const [community, setCommunity] = useState('');

  const user = useSelector((state) => state.firebase);
  const userId = user?.user?.uid;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setCommunity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCommunity(history, userId, community));
  };

  useEffect(() => {
    setCommunity(user?.community);
  }, [])

  return (
    <Grid container alignItems="center" justifyContent="center" style={{padding: "150px"}}>
      {user?.community === '' ? (
        <Grid item xs={12}>
          <Typography variant="h6" align="center">Please enter your zip code.</Typography>
        </Grid>
      ) : ''}
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField className={classes.formField} name="community" type="text" variant="outlined" label="Zip Code" onChange={handleChange} value={community || ''} required/>
        <Button type="submit" className={classes.formField} variant="outlined" color="primary">Submit</Button>
      </form>
    </Grid>
  )
}

export default Community;