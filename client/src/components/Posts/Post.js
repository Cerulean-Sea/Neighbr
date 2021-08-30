import React from 'react';
import { Typography, Avatar, Fab, Container, Card, CssBaseline } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';

import useStyles from './stylesPost';

import sampleData from './sampleData';

export default (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Card className={classes.card}>

        <div className={classes.header}>
          <Avatar
            className={classes.avatar}
            alt="Neighbor"
            src="/neighbor.png"
          />

          <div>
            <Typography variant="h5">
              Hi-di-ho, neighbor!
            </Typography>
            {sampleData.tags.map((tag) => <span className={classes.tag}>{tag}</span>)}
          </div>

          <Fab className={classes.fab} aria-label="close" size="small">
            <CloseIcon />
          </Fab>
        </div>

        <Typography variant="body1" paragraph="true">
          {sampleData.text.slice(0, 250) + ' . . .'}
        </Typography>

        <div className={classes.footer}>

          <Typography variant="body2">
            {moment(sampleData.created).fromNow()}
          </Typography>
        </div>

      </Card>
    </Container>
  )
}