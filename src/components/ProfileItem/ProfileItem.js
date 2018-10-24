import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ProfileItem extends Component {


    render() {
        return (
            <tr>
                <td>
                    {this.props.profile.name}
                </td>
                <td>
                    {this.props.profile.email}
                <td/>
                <td>
                    {this.props.profile.bands}
                </td>
                <td>
                    {this.props.profile.city}
                </td>
              


                </td>
              
               
               
            </tr>
        );
    }
}

export default connect()(withRouter(ProfileItem));