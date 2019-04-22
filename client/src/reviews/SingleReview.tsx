import React, { Component } from 'react';
import {
  Typography,
  Grid,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  Button
} from '@material-ui/core';

import withRoot from '../withRoot';

import pubBeer from '../images/pub_beer.jpeg';
import StarRating from '../components/StarRating';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });

export interface ReviewCardProps extends WithStyles<typeof styles> {
  venue: string;
  summary: string;
  review: string;
  date: string;
  rating: number;
}

export interface ReviewCardState {
  expanded: boolean;
}

class SingleReview extends Component<ReviewCardProps, ReviewCardState> {
  constructor(props: ReviewCardProps) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, rating, date, venue, summary, review } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item sm={12} md={12} lg={12}>
          <Typography
            component="h1"
            variant="h5"
            color="textPrimary"
            gutterBottom
          >
            {venue}
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            color="textSecondary"
            gutterBottom
          >
            {summary}
          </Typography>
          <Typography component="h3" variant="subtitle1" color="textSecondary">
            {date}
          </Typography>
          <StarRating rating={rating} total={10} />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <img src={pubBeer} width="100%" />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Typography paragraph>{review}</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Link to={'/reviews'} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              Back to reviews
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default withRoot(withStyles(styles)(SingleReview));
