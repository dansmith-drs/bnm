import React, { Component } from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';

import withRoot from '../withRoot';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';

const styles = (theme: Theme) => createStyles({});

export interface StarRatingProps extends WithStyles<typeof styles> {
  rating: number;
  total: number;
}

class StarRating extends Component<StarRatingProps> {
  render() {
    const { classes, rating, total } = this.props;
    return (
      <div>
        {[...Array(Math.floor(rating))].map((e, i) => (
          <Star key={i} />
        ))}
        {[...Array(rating % 1 !== 0 ? 1 : 0)].map((e, i) => (
          <StarHalf key={i} />
        ))}

        {[...Array(total - Math.ceil(rating))].map((e, i) => (
          <StarBorder key={i} />
        ))}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(StarRating));
