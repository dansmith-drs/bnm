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
import ReviewCard from './ReviewCard';
import SingleReview from './SingleReview';
import ReviewCards from './ReviewCards';
import { Route, Link, RouteComponentProps, Router } from 'react-router-dom';
import TestComp from './TestComp';

const styles = (theme: Theme) => createStyles({});

export interface ReviewProps
  extends RouteComponentProps<{ reviewID: string }>,
    WithStyles<typeof styles> {}

export interface ReviewState {
  isLoading: boolean;
  reviews: ReviewData[];
  error: any;
}

export interface ReviewData {
  _id: string;
  venue: string;
  summary: string;
  review: string;
  date: string;
  rating: number;
}

class Review extends Component<ReviewProps, ReviewState> {
  constructor(props: ReviewProps) {
    super(props);
    this.state = {
      isLoading: true,
      reviews: [],
      error: null
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('api/reviews')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({ reviews: data, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { classes, match } = this.props;
    const { reviews, isLoading, error } = this.state;
    return (
      <React.Fragment>
        <Route
          path={`${match.path}/:reviewID`}
          exact
          render={props => {
            const id = props.match.params.reviewID;
            const foundReview = reviews.find(review => review._id === id);

            if (foundReview) {
              return (
                <SingleReview
                  {...props}
                  rating={foundReview.rating}
                  venue={foundReview.venue}
                  summary={foundReview.summary}
                  review={foundReview.review}
                  date={foundReview.date}
                />
              );
            } else {
              return null;
            }
          }}
        />
        <Route
          path={`${match.path}`}
          exact
          render={props => (
            <ReviewCards
              {...props}
              reviews={reviews}
              error={error}
              loading={isLoading}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Review));
