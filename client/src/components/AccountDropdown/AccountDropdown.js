import React, { useState } from 'react';
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IndividualPosts from './IndividualPosts';
import ChangeLocation from './ChangeLocation';
import Chat from './Chat';
import Settings from './Settings';

const AccountDropdown = () => {

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 100,
  },
  menu: {
    width: 400,
  },
  listItem: {
    whiteSpace: 'normal'
  }
}));

const classes = useStyles();
let [menuItem, setMenuItem] = useState('name');

const handleChange = e => setMenuItem(e.target.value)

  return (
    <Router>
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Account</InputLabel>

          <Select
          value={menuItem}
          MenuProps={{className: classes.menu}}
          onChange={handleChange}
          >
            {/* should take users to individual posts */}
            <MenuItem
            value="name"
            className={classes.listItem}
            >Name</MenuItem>

            {/* should allow suers to change location settings */}
            <MenuItem
            value="location"
            className={classes.listItem}
            >Location</MenuItem>

            <MenuItem
            value="notifications"
            className={classes.listItem}
            >Notifications</MenuItem>

            <MenuItem
            value="settings"
            className={classes.listItem}
            >Settings</MenuItem>

            {/* {sampleMessage.map(message =>
            <MenuItem
            key={message.userId}
            value={message.userId}
            className={classes.listItem}
            >
            {message.username}<br></br>
            {message.text}
            </MenuItem>
            )} */}

          </Select>


      </FormControl>
        <Route path="/api/posts/users/" exact component={IndividualPosts} />
        {/* <Route path='/settings' component={Settings} />
        <Route path='/chat' component={Chat} />
        <Route path='/location' component={ChangeLocation} /> */}

          {/* <Settings /> */}
          <Chat />
          {/* <ChangeLocation />
          <IndividualPosts /> */}
      {menuItem}
    </div>
    </Router>
  )
}

export default AccountDropdown;