import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
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
  
  export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
        <CardContent>
          
          <Typography variant="h5" component="h2">
          {props.service}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.fname}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.lname}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.city}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.address}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {props.zip}
          </Typography>
        </CardContent>
        
      </Card>
    );
  }