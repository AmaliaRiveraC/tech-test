import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'gray',
    flexGrow: 1,
  },
  CustomerService: {
    width: '165px',
    height: '23px',
    fontFamily: 'Helvetica Neue',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#ffffff',
  },
  Rectngulo826: {
    width: '100%',
    height: '123px',
    backgroundColor: '#303850',  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.Rectngulo826}>
            <Grid item lg={12} m={12} sm={6}>
              <Typography className={classes.CustomerService}>Customer Service</Typography>
            </Grid>
            <Grid item lg={12} m={12} sm={6}>
              <Typography>hola@urbvan.com</Typography>
            </Grid>
            <Grid item lg={12} m={12} sm={12}>
             <Typography>Horarios de 6AM a 10PM</Typography>
            </Grid>
        </div>
      );
};

export default Footer;

