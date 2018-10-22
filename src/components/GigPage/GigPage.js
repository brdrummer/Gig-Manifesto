import React, { Component } from 'react';
import { connect } from 'react-redux';

class GigPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type:'FETCH_GIGS' });
 }

 


  render() {
    return (
      <div>
       <h1>Hello </h1>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  gigList: reduxState.gigList
});

export default connect(mapStateToProps)(GigPage);
