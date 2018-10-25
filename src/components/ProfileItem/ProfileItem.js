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
            <Card className="section">
                <CardActionArea>
                    <Typography className="section"> <h2>Name:</h2>

                        <h4><td>{this.props.profile.name}</td></h4>
                    </Typography>
                    <CardMedia
                        title="venue"
                        className="picture"
                        image={this.props.profile.image_url}
                    />
                    <CardContent>
                        <Typography className="section"> <h2>Email:</h2>

                            <h4><td>{this.props.profile.email}</td></h4>
                        </Typography>
                        <Typography className="section"> <h2>City:</h2>

                            <h4><td>{this.props.profile.city}</td></h4>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default connect()(withRouter(ProfileItem));