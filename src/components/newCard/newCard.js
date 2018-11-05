import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'inline-block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '35vw',
    margin: '50px',
    color: 'black',
    textAlign: 'center',
  

  },
  media: {
    height: 200,
  },
};

function MediaCard(props) {
  const { classes } = props;


  return (
 
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.gig.image_url}
        />
        <CardContent className={classes.card.textAlign}>
    <h3>Venue:</h3> 
    <td>{props.gig.name}</td>
    <h3>Date:</h3> 
    <td>{props.gig.date}</td>
    <h3>Start Time:</h3> 
    <td>{props.gig.startTime}</td>
    <h3>Sound Check:</h3> 
    <td>{props.gig.soundCheck}</td>
    <h3>Address:</h3> 
    <td>{props.gig.address}</td>
    <h3>Entry Fee:</h3> 
    <td> $ {props.gig.entryFee}</td>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
 
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);