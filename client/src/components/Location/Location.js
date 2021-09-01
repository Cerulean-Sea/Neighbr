import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, TextField, Button, makeStyles, Grid } from '@material-ui/core';
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

const Location = () => {
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
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField className={classes.formField} name="community" type="text" variant="outlined" label="Zip Code" onChange={handleChange} value={community || ''} required/>
        <Button type="submit" className={classes.formField} variant="outlined" color="primary">Submit</Button>
      </form>
    </Grid>
  )
}

export default Location;