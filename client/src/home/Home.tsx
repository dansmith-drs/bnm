import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Button,
  Typography,
  Grid,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  AppBar,
  Toolbar
} from '@material-ui/core';
import barChairs from '../images/bar_chairs.jpg';

import withRoot from '../withRoot';

import HomeAppBar from '../HomeAppBar';
import Hero from './Hero';
export interface HomeComponentProps {
  classes: Theme;
}

const styles = (theme: Theme) => createStyles({});

class Home extends Component<WithStyles<typeof styles>> {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Grid container spacing={40}>
          <Grid item sm={12} md={6} lg={9}>
            <Typography gutterBottom variant="h6" component="h3">
              Who we are
            </Typography>
            <Typography paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              What we do
            </Typography>
            <Typography paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              Get in touch
            </Typography>
            <Typography paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <img src={barChairs} width="100%" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Home));
