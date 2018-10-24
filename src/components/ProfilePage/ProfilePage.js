import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileItem from '../ProfileItem/ProfileItem';


class ProfilePage extends Component {
    state = {
        textVisible: false
      }

  componentDidMount() {
    this.props.dispatch({ type:'FETCH_GIGS' });
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
      displayItem = this.props.history.push('/gigform')
    }
    return (
      <div>
        <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Associated Bands
                            </th>
                            <th>
                                City
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.profileList.map(profile => {
                            return <ProfileItem key={profile.id} profile={profile} /> 
                        })}
                    </tbody>
                </table>
                <button onClick={this.toggleDisplay}>Add A Gig!</button>
        {displayItem}

      
{/* // {JSON.stringify(this.props.gigList, null, 2)} */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    profileList: reduxState.profileList
});

export default connect(mapStateToProps)(ProfilePage);
