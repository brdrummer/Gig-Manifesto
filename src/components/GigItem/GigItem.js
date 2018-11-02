import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';





class GigItem extends Component {

    state = {
        textVisible: false
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

            <Card className="cardsectiontwo">
                <CardActionArea className="cardsection"onClick={this.toggleDisplay}>
                {displayItem}

                <CardContent >
                    <hr className="head"></hr>
               
                    <Typography className="cardsection"> <h3>Venue:</h3>

                        <h4><td>{this.props.gig.name}</td></h4>
                    </Typography>
                    <hr className="head" ></hr>
                   
                    <Typography className="cardsection"> <h3>Date:</h3>

                        <h4> <td> {this.props.gig.date}</td></h4>
                    </Typography>
                    <hr className="head"></hr>
                        <Typography className="cardsection"> <h3>Start Time:</h3>

                            <h4><td>{this.props.gig.startTime}</td></h4>
                        </Typography>
                        <hr className="head"></hr>
                        <Typography className="cardsection"> <h3>Sound Check:</h3>

                            <h4><td>{this.props.gig.soundCheck}</td></h4>
                        </Typography>
                        <hr className="head"></hr>
                        <Typography className="cardsection"> <h3>Address:</h3>

                            <h4><td>{this.props.gig.address}</td></h4>
                        </Typography>
                        <hr className="head"></hr>


                        <Typography className="cardsection"> <h3>Entry Fee:</h3>

                            <h4> <td> $ {this.props.gig.entryFee}</td></h4>
                        </Typography>
                        <hr className="head"></hr>
                        <CardMedia
                        title="venue"
                        className="picture"
                        image={this.props.gig.image_url}
                    />

                    </CardContent>


                    </CardActionArea>
                    
            </Card>






        );
    }
}

export default connect()(withRouter(GigItem));