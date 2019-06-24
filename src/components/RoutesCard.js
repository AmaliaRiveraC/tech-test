import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import grupo1 from '../assets/Grupo1.svg';
import grupo from '../assets/Grupo.svg';
import grupo3 from '../assets/Grupo3.svg';



const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    display: 'inline'
  },
  container:  {
    width: '100%',
    height: '60vh',
    paddingLeft: '10%',
    marginRight: '0',
    marginBottom: '-5%',
  },
  root: {
    width: '35%',
    padding: theme.spacing(3, 2),
    zIndex: '9999',
    position: 'absolute',
    top: '35%',
  },
  rutas: {
      width: '65px',
      height: '24px',
      fontFamily: 'Helvetica Neue',
      fontSize: '21px',
      fontWeight: 300,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.19,
      letterSpacing: 'normal',
      textAlign: 'right',
      color: '#252c41',
  },
  right: {
    right: '15%',
    backgroundColor: '#f8f8f8',
  }
}));

const SimpleCard = (props) => {
  const { showSchedule, api, schedule, isTrue} = props;
  const classes = useStyles();
  const objRoutes = api['body']['results'];
  const routes = objRoutes.map((obj) => {
      return(
        <Grid key={obj.id} item xs={12}>
          <img src={grupo3}/>
          <p className={classes.img}  data-id={obj.id} onClick={() => {showSchedule(obj)}}> 
              {obj.name}
          </p>
        </Grid>
      )
  });
  const schedules = Object.keys(schedule);
  let departureTimePM = null;
  let departureTimeAM = null;
  let templateAM = undefined;
  let templatePM = undefined;

  if(schedule[schedules[0]] !== []) {
    departureTimePM = schedule[schedules[0]];
  }

  if(schedule[schedules[1]] !== []) {
    departureTimeAM = schedule[schedules[1]];
  }
 
  if(departureTimeAM !== undefined && departureTimeAM !== null) {
    templateAM = departureTimeAM.map((item, index) => {
      let array = item.departure_time.split(' ');
      let hour = array[0].split(':', 2).join(':');
      return(<div key={`am${index}`}><p>Llegar {`${hour} ${array[1]}`}</p></div>)
    });  
  }
  if(departureTimePM !== undefined && departureTimePM !== null) {
    templatePM = departureTimePM.map((item, index) => {
      let array = item.departure_time.split(' ');
      let hour = array[0].split(':', 2).join(':');
      return(<div key={`pm${index}`}><p>Salir {`${hour} ${array[1]}`}</p></div>)
    });  
  }
 
  

  return (
    <Grid container className={classes.container}>
        <Grid item lg={6} m={6} sm={6}>
                <Paper className={classes.root}>
                    <h2 className={classes.rutas}>
                        Rutas
                    </h2>
                    {routes} 
                </Paper>
        </Grid>
        {isTrue ?  <Grid item lg={6} m={6} sm={3} xs={3}>
            <Paper className={classNames(classes.root, classes.right)}>
                    <h2 className={classes.rutas}>
                        Horarios
                    </h2>
                    <div> <p>{schedules[1]}</p>{templateAM}<p>{schedules[0]}</p>{templatePM}</div>
            </Paper>
        </Grid> : null}
    </Grid>
  );
};

export default SimpleCard;