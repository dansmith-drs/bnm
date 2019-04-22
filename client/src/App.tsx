import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';
import withRoot from './withRoot';
import HomeAppBar from './HomeAppBar';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { DRAWER_WIDTH } from './constants';
export interface HomeComponentProps {
  classes: Theme;
}

const styles = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: DRAWER_WIDTH
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  });

export interface HomeState {
  sideBarOpen: boolean;
}

class App extends Component<WithStyles<typeof styles>, HomeState> {
  constructor(props: WithStyles<typeof styles>) {
    super(props);
    this.state = {
      sideBarOpen: true
    };
  }

  handleSidebar = (open: boolean) => {
    this.setState({
      sideBarOpen: open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <HomeAppBar
          sideBarOpen={this.state.sideBarOpen}
          handleSideBar={this.handleSidebar}
        />
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: !this.state.sideBarOpen
          })}
        >
          <Switch>
            {Routes.map((route, i) => {
              return (
                <Route
                  key={i}
                  exact={route.path === '/'}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(App));
