import React, { useState } from 'react';
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from '@material-ui/core';

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
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Account</InputLabel>

          <Select
          value={menuItem}
          MenuProps={{className: classes.menu}}
          onChange={handleChange}
          >
            {/* takes you to individual posts */}
            <MenuItem
            value="name"
            className={classes.listItem}
            >Name</MenuItem>

            {/* allows you to change location settings */}
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
      {menuItem}
    </div>
  )
}

export default AccountDropdown;