import React from 'react';
import PropTypes from 'prop-types';
//sub components
import NavBar from './components/NavBar';
import RoutesCard from './components/RoutesCard';
import MapContainer from './components/Map';
import Footer from './components/Footer';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import api from './api/test.json';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class App extends React.Component {
  showSchedule = (event) => {
    console.log(event.target.dataset.id)
  }
  render() {
    const { classes } = this.props;
    return(
      <div>
        <NavBar/>
        <Typography variant="h6" className={classes.title}>
            Rutas en la Ciudad de México
        </Typography>
        <Typography>
            Checa cual es la que más te conviene para llegar a Santa Fe. Contamos con muchos horarios para llevarte a tiempo.
        </Typography>
        <RoutesCard api={api}
                    showSchedule={this.showSchedule} />
        <MapContainer />
        <Footer />
      </div>
      
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
