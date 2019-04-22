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
  Toolbar
} from '@material-ui/core';

import withRoot from '../withRoot';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    heroUnit: {
      backgroundColor: theme.palette.background.paper
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4
    }
  });

class Hero extends Component<WithStyles<typeof styles>> {
  render() {
    const MyLink = () => <Link to="/open-collective" />;
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Bangers and Mash
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            A tradition to be preserved
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button
                  component={({ innerRef, ...props }) => (
                    <Link {...props} to="/reviews" />
                  )}
                  variant="contained"
                  color="primary"
                >
                  Show me the reviews!
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Hero));
