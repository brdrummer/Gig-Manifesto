import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileItem from '../ProfileItem/ProfileItem';


class ProfilePage extends Component {
    state = {
        textVisible: false
      }

  componentDidMount() {
    this.props.dispatch({ type:'FETCH_PROFILE', payload: this.props.reduxState.user.id });
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
          <h1>Your Profile</h1>
          <button className="gigButton"onClick={this.toggleDisplay}>Add A Gig!</button>
          <hr className="head"></hr>
         
        
       
        {displayItem}
        <ul className="small">
                        {this.props.profileList.map(profile => {
                            return <ProfileItem key={profile.id} profile={profile} /> 
                        })}
                      </ul>

               
  
                   
               
              

      
{/* // {JSON.stringify(this.props.reduxState.user.id, null, 2)} */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    profileList: reduxState.profileList,
    reduxState
});

export default connect(mapStateToProps)(ProfilePage);
