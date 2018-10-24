import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileItem from '../ProfileItem/ProfileItem';


class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type:'FETCH_GIGS' });
 }


 render() {
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

      
{/* // {JSON.stringify(this.props.gigList, null, 2)} */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    profileList: reduxState.profileList
});

export default connect(mapStateToProps)(ProfilePage);
