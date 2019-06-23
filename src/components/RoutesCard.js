import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
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
});

const SimpleCard = (props) => {
  const { showSchedule, api, schedule, isSchedule} = props;
  const classes = useStyles();
  const objRoutes = api['body']['results'];
  const routes = objRoutes.map((obj) => {
      return(
        <p key={obj.id} data-id={obj.id} onClick={() => {showSchedule(obj)}}> 
            {obj.name}
        </p>
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
    templateAM = departureTimeAM.map((item) => {
      return(<div><p>Llegar {item.arrival_time}</p></div>)
    });  
  }
  if(departureTimePM !== undefined && departureTimePM !== null) {
    templatePM = departureTimePM.map((item) => {
      return(<div><p>Salir {item.departure_time}</p></div>)
    });  
  }
 
  

  return (
    <Grid container>
        <Grid item lg={6} m={6} sm={6}>
                <Paper>
                    <Typography variant="h2" className={classes.title} color="textSecondary" gutterBottom>
                        Rutas
                    </Typography>
                    {routes} 
                </Paper>
        </Grid>
        <Grid item lg={6} m={6} sm={3} xs={3}>
            <Paper>
                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                        Horarios
                    </Typography>
                    {isSchedule ?<div> <p>{schedules[1]}</p>{templateAM}<p>{schedules[0]}</p>{templatePM}</div>: <p>holi</p>}
            </Paper>
        </Grid>
    </Grid>
  );
};

export default SimpleCard;