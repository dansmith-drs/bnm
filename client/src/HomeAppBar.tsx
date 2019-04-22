import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Typography,
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { Menu, ChevronLeft } from '@material-ui/icons';

import withRoot from './withRoot';
import routes from './routes';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { DRAWER_WIDTH } from './constants';
export interface HomeComponentProps {
  classes: Theme;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    },
    drawerPaper: {
      width: DRAWER_WIDTH
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -DRAWER_WIDTH
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  });

export interface HomeAppBarState {}

export interface HomeAppBarProps
  extends WithStyles<typeof styles>,
    RouteComponentProps<{}> {
  sideBarOpen: boolean;
  handleSideBar: (open: boolean) => void;
}
class HomeAppBar extends Component<HomeAppBarProps, HomeAppBarState> {
  constructor(props: HomeAppBarProps) {
    super(props);
  }

  activeRoute = (routeName: string): boolean => {
    const path = this.props.location.pathname;
    if (path === routeName && path === '/') {
      return true;
    }
    return routeName !== '/' &&
      this.props.location.pathname.indexOf(routeName) > -1
      ? true
      : false;
  };

  render() {
    const { classes, sideBarOpen, handleSideBar } = this.props;

    return (
      <React.Fragment>
        <AppBar
          position="static"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: sideBarOpen
          })}
        >
          <Toolbar disableGutters={!sideBarOpen}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => handleSideBar(true)}
              className={classNames(
                classes.menuButton,
                sideBarOpen && classes.hide
              )}
            >
              <Menu />
            </IconButton>

            <Typography variant="h6" color="inherit" noWrap>
              Bangers and Mash
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={sideBarOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => handleSideBar(false)}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          {routes.map((prop, key) => {
            return (
              <List key={key}>
                <Link to={prop.path} style={{ textDecoration: 'none' }}>
                  <ListItem selected={this.activeRoute(prop.path)}>
                    <ListItemIcon>
                      <prop.icon />
                    </ListItemIcon>
                    <ListItemText primary={prop.sidebarName} />
                  </ListItem>
                </Link>
              </List>
            );
          })}
        </Drawer>
      </React.Fragment>
    );
  }
}

// export default withRoot(withStyles(styles)(HomeAppBar));

export default withRouter(withRoot(withStyles(styles)(HomeAppBar)));
