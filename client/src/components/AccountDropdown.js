import React, { useState } from 'react';
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from '@material-ui/core';

const AccountDropdown = () => {
const sampleMessage = [{ userId: 1, username: 'Sally234', text:'Hi, I am interested in purchasing the chair. Would you take an offer of $20?'}, { userId: 2, username: 'James777', text:'Hi, we are open from 10am to 5pm'}, { userId: 3, username: 'Gabby11', text:'Yes, of course. Come by anytime to pick it up.'}]

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
let [messageId, setMessageId] = useState(1);

const handleChange = e => setMessageId(e.target.value)

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Account</InputLabel>

          <Select
          value={messageId}
          MenuProps={{className: classes.menu}}
          onChange={handleChange}
          >
            <MenuItem>Name</MenuItem>
            <MenuItem>Location</MenuItem>

            {sampleMessage.map(message =>
            <MenuItem
            key={message.userId}
            value={message.userId}
            className={classes.listItem}
            >
            {message.username}<br></br>
            {message.text}
            </MenuItem>
            )}

          </Select>

      </FormControl>
      {messageId}
    </div>
  )
}

export default AccountDropdown;