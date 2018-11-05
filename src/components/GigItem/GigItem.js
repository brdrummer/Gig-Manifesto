import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MediaCard from '../newCard/newCard';


//NEED TO CONVERT OVER TO MEDIA CARD
//ACCESS IN MEDIA CARD WITH PROPS.GIG.WHATEVER
//
      
           

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };
  


class GigItem extends Component {

    state = {
        textVisible: false,
        classes: this.props.classes
      }


    
   

    toggleDisplay = (event) => {
        this.setState({
          textVisible: !this.state.textVisible
        })
      }

    render() {
        let displayItem;
    // IF for toggle
    if (this.state.textVisible) {
      displayItem = this.props.history.push('/map')
    }

            
    
        

        return (

<div>
          <MediaCard key={this.props.key} gig={this.props.gig}/>
           
            <Card className={this.state.classes}>
            <table>
                <tbody>
                <CardActionArea onClick={this.toggleDisplay}>
                {displayItem}

                <CardContent >
                    <hr className="head"></hr>
               
                    <Typography > <h3>Venue:</h3>

                        {this.props.gig.name}
                    </Typography>
                    <hr className="head" ></hr>
                   
                    <Typography > <h3>Date:</h3>

                       {this.props.gig.date}
                    </Typography>
                    <hr className="head"></hr>
                        <Typography > <h3>Start Time:</h3>

                            {this.props.gig.startTime}
                        </Typography>
                        <hr className="head"></hr>
                        <Typography > <h3>Sound Check:</h3>

                            {this.props.gig.soundCheck}
                        </Typography>
                        <hr className="head"></hr>
                        <Typography > <h3>Address:</h3>

                          {this.props.gig.address}
                        </Typography>
                        <hr className="head"></hr>


                        <Typography > <h3>Entry Fee:</h3>

                        $ {this.props.gig.entryFee}
                        </Typography>
                        <hr className="head"></hr>
                        <CardMedia
                        title="venue"
                        className="picture"
                        image={this.props.gig.image_url}
                    />

                    </CardContent>


                    </CardActionArea>
                    </tbody>

                    </table>
                    
            </Card>

            </div>

      
           

// const styles = {
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   };
  
//   function gigItem(props) {
//     const { classes } = props;
//     return (
//       <Card className={classes.card}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={this.props.gig.image_url}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//             {this.props.gig.name}
//             </Typography>
//             <Typography component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   }
  






        );
    }
}

GigItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default connect()(withRouter(withStyles(styles)((GigItem))));