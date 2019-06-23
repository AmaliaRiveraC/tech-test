import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.svg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  AppBar: {
    width: '18%',
    color: '#fff',
    backgroundColor: '#f1404b',
    position: 'absolute',
    right: '0px',
  },
  logo: {
      width: '35%',
      objectFit: 'contain',
      padding: '1em',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item sm={3}>
      <img src={logo} className={classes.logo} alt="logo" />
      <AppBar className={classes.AppBar}>
      
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </Grid>
    </div>
  );
}