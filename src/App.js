/*global google*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//sub components
import NavBar from './components/NavBar';
import RoutesCard from './components/RoutesCard';
import MapContainer from './components/Map';
import Footer from './components/Footer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import api from './api/test.json';

const styles = theme => ({
  main: {
    width: '100%',
    height: '100vh',
    display: 'block', // Fix IE 11 issue.
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
    
    lineHeight: 1.23,
    letterSpacing: 'normal',
    
    flexGrow: 1,
  },
  generalStyle: {
    fontFamily: "Helvetica Neue",
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    color: '#252c41',
  },
  paragraph: {
    marginTop: '0',
    margin: '1rem',
    width: '95%',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.2,
    textAlign: 'left',
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: '',
      isTrue: false,
      originLatitude: 19.3765259999999984,
      originLongitude: -99.2554329999999965,
      destinationLatitude: 19.3450550000000000,
      destintationLongitude: -99.1381690000000000,
      stations: null,
    };
  }
  
  showSchedule = (obj) => {
    this.setState({
      schedule: obj.schedule,
      stations: obj.stations,
      isTrue: true,
      originLatitude: obj.stations[0].latitude,
      originLongitude: obj.stations[0].longitude,
      destinationLatitude: obj.stations[obj.stations.length - 1].latitude,
      destintationLongitude: obj.stations[obj.stations.length - 1].longitude
    });
  }
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.main}>
        <Grid
        container
        alignItems="center"
        justify="center"
        spacing={0}>
        
        <NavBar/>
        <Grid item sm={12}>
          <Typography variant="h6" className={classNames(classes.title, classes.generalStyle)}>
            Rutas en la CDMX
          </Typography>
        
          <Typography className={classNames(classes.paragraph, classes.generalStyle)}>
            Checa cual es la que más te conviene para llegar a Santa Fe. Contamos con muchos horarios para llevarte a tiempo.
          </Typography>
          <RoutesCard api={api}
                    showSchedule={this.showSchedule}
                    schedule={this.state.schedule}
                    isTrue={this.state.isTrue}/>
          <MapContainer originLatitude={this.state.originLatitude}
                        originLongitude={this.state.originLongitude}
                        destinationLatitude={this.state.destinationLatitude}
                        destintationLongitude={this.state.destintationLongitude}
                        stations={this.state.stations}
                        isStations={this.state.isTrue}
                        />
        
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
