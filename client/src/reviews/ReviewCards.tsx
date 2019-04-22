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
  CircularProgress
} from '@material-ui/core';

import withRoot from '../withRoot';
import ReviewCard from './ReviewCard';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ReviewData } from './Review';

const styles = (theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing.unit * 2
    }
  });

export interface ReviewCardsProps
  extends WithStyles<typeof styles>,
    RouteComponentProps {
  reviews: ReviewData[];
  loading: boolean;
  error: any;
}

class ReviewCards extends Component<ReviewCardsProps> {
  render() {
    const { classes, reviews, loading, error, ...otherProps } = this.props;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }
    return (
      <React.Fragment>
        <Grid container spacing={40}>
          {reviews.map((review, i) => (
            <Grid item key={i} sm={6} md={4} lg={3}>
              <ReviewCard
                {...otherProps}
                venue={review.venue}
                summary={review.summary}
                rating={review.rating}
                id={review._id}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(ReviewCards));
