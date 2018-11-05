import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class ProfileItem extends Component {
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
            <Card className="sectionprofile">
                <CardContent className="sectionprofile">

                    <Typography> <h5>Name:</h5>

                        <h4><td>{this.props.profile.name}</td></h4>
                    </Typography>
                    <hr></hr>
                    <Typography > <h5>Email:</h5>

                        <h4><td>{this.props.profile.email}</td></h4>
                    </Typography>
                    <hr></hr>
                    <Typography > <h5>Bands:</h5>

                        <h4><td>{this.props.profile.bands}</td></h4>
                    </Typography>
                    <hr></hr>
                    <Typography > <h5>City:</h5>

                        <h4><td>{this.props.profile.city}</td></h4>
                    </Typography>
                    <hr></hr>
                    <CardMedia
                        title="venue"
                        className="picture"
                        image={this.props.profile.image_url}
                    />
                </CardContent>

            </Card>
        );
    }
}

export default connect()(withRouter(ProfileItem));