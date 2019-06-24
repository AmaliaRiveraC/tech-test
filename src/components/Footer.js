import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import mail from '../assets/envelope.svg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'gray',
    flexGrow: 1,
  },
  img: {
    width: '10px',
  },
  inline: {
    display: 'inline',
    padding: '.4rem',
    fontSize: '.64rem'
  },
  generalStyle: {
    paddingTop: '1rem',
    paddingLeft: '1.2rem',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.2,
    textAlign: 'center',
    color: '#ffffff',
  },
  CustomerService: {
    width: '150px',
    height: '23px',
    fontSize: '20px',
    fontWeight: 'normal',
    paddingBottom: '0',
  },
  paragraphSize: {
    fontSize: '15px',
    fontWeight: 300,
    height: '18px',
  },
  holaurbvancom: {
    width: '154px',
  },
  Horarios: {
    width: '177px',
    fontWeight: 500,
  },
  marcaRegistrada: {
    paddingLeft: '2.5rem',
    textAlign: 'center',
    color: '#a7a7a7'
  },
  Rectngulo824: {
    width: '100%',
    height: '94px',
    backgroundColor: '#252c41',
  },
  Rectngulo826: {
    width: '100%',
    height: '94px',
    backgroundColor: '#303850',  
  },
}));

const Footer = () => {
    const classes = useStyles();
    return (
      <div>
        <div className={classes.Rectngulo826}>
          <Grid container>
            <Grid item lg={12} m={12} sm={6} >
              <Typography className={classNames(classes.CustomerService, classes.generalStyle)}>Customer Service:</Typography>
            </Grid>
            <Grid item lg={12} m={12} sm={12} className={classNames(classes.holaurbvancom, classes.generalStyle)}>
              <img  src={mail} alt="icono mail" className={classes.img} />
              <Typography className={classes.inline}>hola@urbvan.com</Typography>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item lg={12} m={12} sm={12}>
             <Typography className={classNames(classes.Horarios, classes.paragraphSize, classes.generalStyle)}>Horarios de 6AM a 10PM</Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.Rectngulo824}>
          <Grid container>
            <Grid item lg={12} m={12} sm={6}>
              <Typography className={classNames(classes.TerminosYCondiciones, classes.paragraphSize, classes.generalStyle)}>Términos y condiciones</Typography>
            </Grid>
            <Grid item lg={12} m={12} sm={6}>
              <Typography className={classNames(classes.PoliticasDePrivacidad, classes.paragraphSize, classes.generalStyle)}>Políticas de privacidad</Typography>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item lg={12} m={12} sm={12}>
             <Typography className={classNames(classes.generalStyle, classes.marcaRegistrada)}>Urbvan ® 2018 es una marca registrada.</Typography>
            </Grid>
          </Grid>
        </div>
        </div>
      );
};

export default Footer;

