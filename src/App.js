import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
//sub components
import NavBar from './components/NavBar';
import RoutesCard from './components/RoutesCard';
import MapContainer from './components/Map';
import Footer from './components/Footer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, createMuiTheme, makeStyles, } from '@material-ui/core/styles';
import api from './api/test.json';

const styles = theme => ({
  main: {
    width: '100%',
    height: '100vh',
    display: 'block', // Fix IE 11 issue.
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: "Helvetica Neue",
  }, 
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingTop: '1.5rem',
    padding: '1rem',
    fontFamily: "Helvetica Neue",
    fontSize: '30px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.23,
    letterSpacing: 'normal',
    color: '#252c41',
    flexGrow: 1,
  },
  paragraph: {
    marginTop: '0',
    margin: '1rem',
    width: '95%',
    fontSize: '16px',
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#252c41',
  }
});

class App extends React.Component {
  showSchedule = (event) => {
    console.log(event.target.dataset.id)
  }
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.main}>
        <Grid
        alignItems="center"
        justify="center"
        spacing={0}
        direction="column">
        
        <NavBar/>
        <Grid item sm={12}>
        <Typography variant="h6" className={classes.title}>
            Rutas en la CDMX
        </Typography>
        
        <Typography className={classes.paragraph}>
            Checa cual es la que más te conviene para llegar a Santa Fe. Contamos con muchos horarios para llevarte a tiempo.
        </Typography>
        <RoutesCard api={api}
                    showSchedule={this.showSchedule} />
        
        <Footer />
        </Grid>
        </Grid>
      </div>
      
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
