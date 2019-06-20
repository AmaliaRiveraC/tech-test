import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
  const { showSchedule, api } = props;
  console.log(props)
  const classes = useStyles();
  const objRoutes = api['body']['results'];
  const routes = objRoutes.map((obj) => {
      return(
        <p key={obj.id} data-id={obj.id} onClick={showSchedule}> 
            {obj.name}
        </p>
      )
  });


  return (
    <Grid container>
        <Grid item lg={6} m={6} sm={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h2" className={classes.title} color="textSecondary" gutterBottom>
                        Rutas
                    </Typography>
                    {routes} 
                </CardContent>
            </Card>
        </Grid>
        <Grid item lg={6} m={6} sm={3} xs={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
                        Horarios
                    </Typography>
                    
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
};

export default SimpleCard;