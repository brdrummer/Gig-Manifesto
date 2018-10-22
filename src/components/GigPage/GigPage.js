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
{JSON.stringify(this.props.gigList, null, 2)}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  gigList: reduxState.gigList
});

export default connect(mapStateToProps)(GigPage);
