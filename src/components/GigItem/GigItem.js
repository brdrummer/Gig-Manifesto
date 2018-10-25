import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';





class GigItem extends Component {
    styles = {
        card: {
            maxWidth: 120,
        },
        media: {
            height: 200,
        },
    };



    render() {
        

        return (
            <Card className="section">
                <CardActionArea>
                    <Typography className="section"> <h2>Venue:</h2>

                        <h4><td>{this.props.gig.name}</td></h4>
                    </Typography>
                    <CardMedia
                        title="venue"
                        className="picture"
                        image={this.props.gig.image_url}
                    />
                    <CardContent>
                        <Typography className="section"> <h2>Start Time:</h2>

                            <h4><td>{this.props.gig.startTime}</td></h4>
                        </Typography>
                        <Typography className="section"> <h2>Sound Check:</h2>

                            <h4><td>{this.props.gig.soundCheck}</td></h4>
                        </Typography>
                        <Typography className="section"> <h2>Address:</h2>

                            <h4><td>{this.props.gig.address}</td></h4>
                        </Typography>


                        <Typography className="section"> <h2>Entry Fee:</h2>

                            <h4> <td> $ {this.props.gig.entryFee}</td></h4>
                        </Typography>


                    </CardContent>
                </CardActionArea>
            </Card>


        );
    }
}

export default connect()(withRouter(GigItem));