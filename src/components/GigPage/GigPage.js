import React, { Component } from 'react';
import { connect } from 'react-redux';
import GigItem from '../GigItem/GigItem';



class GigPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type:'FETCH_GIGS' });
 }


 render() {
    return (
      <div>
        <h1>
         Gig Management
       </h1>
        <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Start Time</th>
              <th>SoundCheck</th>
              <th>Address</th>
              <th>Entry Fee</th>
            </tr>
          </thead>
        <tbody>
          {this.props.gigList.map(gig =>{
          return  <GigItem key={gig.id} gig={gig} />
        })}
          </tbody>
        </table>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  gigList: reduxState.gigList
});

export default connect(mapStateToProps)(GigPage);
