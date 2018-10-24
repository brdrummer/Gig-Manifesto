import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';





class GigItem extends Component {


    render() {
        return (
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>


            // <tr>
            //     <td>{this.props.gig.name}</td>
            //     <td>{this.props.gig.startTime}</td>
            //     <td>{this.props.gig.soundCheck}</td>
            //     <td>{this.props.gig.address}</td>
            //     <td>{this.props.gig.entryFee}</td>
            // </tr>

        );
    }
}

export default connect()(withRouter(GigItem));