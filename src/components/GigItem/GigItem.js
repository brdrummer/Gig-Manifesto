import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';





class GigItem extends Component {


    render() {
        return (
            
               
            <tr>    
            <td>{this.props.gig.name}</td>
            <td>{this.props.gig.startTime}</td>
            <td>{this.props.gig.soundCheck}</td>
            <td>{this.props.gig.address}</td>
            <td>{this.props.gig.entryFee}</td>
          </tr>
         
        );
    }
}

export default connect()(withRouter(GigItem));