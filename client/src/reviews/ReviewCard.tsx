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
import { Link, RouteComponentProps } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      width: 275
    },
    cardContent: {
      flexGrow: 1
    },
    media: {
      height: 140
    }
  });

export interface ReviewCardProps
  extends WithStyles<typeof styles>,
    RouteComponentProps {
  venue: string;
  summary: string;
  rating: number;
  id: string;
}

export interface ReviewCardState {
  expanded: boolean;
}

class Review extends Component<ReviewCardProps, ReviewCardState> {
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
    const { classes, summary, venue, rating, match, id } = this.props;

    const linkTo = `${match.url}/${id}`;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={pubBeer}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {venue}
          </Typography>
          <Typography component="p">{summary}</Typography>
        </CardContent>
        <CardActions>
          <Link to={linkTo} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              Read Full Review
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default withRoot(withStyles(styles)(Review));
