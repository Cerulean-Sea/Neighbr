import React from 'react';
import { Typography, Avatar, Fab } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


export default (props) => {
  return (
    <div>
      Post
      <div>
        <Avatar alt="Neighbor" src="/neighbor.png"/>
        <Typography component="h6">
          Hi-di-ho, neighbor!
        </Typography>
        <Fab aria-label="close">
          <CloseIcon />
        </Fab>

      </div>
      <div>
      <Typography component="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.
        </Typography>
      </div>
      <div>
        ---- DATE TIMESTAMP ----
        <span> Pill Badges ----</span>
      </div>
    </div>
  )
}