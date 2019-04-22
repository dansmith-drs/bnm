import React, { Component } from 'react';
import {
  Button,
  Typography,
  Grid,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  AppBar,
  Toolbar,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  CardActionArea
} from '@material-ui/core';
import pubBeer from '../images/pub_beer.jpeg';

import withRoot from '../withRoot';

const styles = (theme: Theme) => createStyles({});

export interface TestCompProps extends WithStyles<typeof styles> {
  myTestProp: string;
}

class TestComp extends Component<TestCompProps> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.myTestProp}
        My test componentMy test componentMy test componentMy test componentMy
        test componentMy test componentMy test componentMy test componentMy test
        componentMy test componentMy test componentMy test componentMy test
        componentMy test componentMy test componentMy test componentMy test
        componentMy test componentMy test componentMy test componentMy test
        componentMy test componentMy test componentMy test componentMy test
        componentMy test componentMy test component
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(TestComp));
