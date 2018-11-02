import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';



class UserPage extends Component {
  state = {
    textVisible: false,
    gigDisplay: false
  }

  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
  }


  toggleDisplay = (event) => {
    this.setState({
      textVisible: !this.state.textVisible,

    })
  }


  toggleGigDisplay = (event) => {
    this.setState({

      gigDisplay: !this.state.gigDisplay
    })
  }




  render() {
    let displayItem;
    let gigItem
    // IF for toggle
    if (this.state.textVisible) {
      displayItem = this.props.history.push('/profile')
    }
    if (this.state.gigDisplay) {
      gigItem = this.props.history.push('/gig')
    }
    return (
    
      <div>
          
         <h2 className="nav-titletwo">Gig Manifesto</h2>
        <h1>
          Welcome, {this.props.user.username}!
        </h1>
        <hr className="head"></hr>

         <div>
          <ul>
            <li>An application for the working class musician. </li>
            <li>Manage all of your gigs easily with just a few clicks.</li>
            <li>Find addresses directly from the app and share with your band members.</li>
          </ul>
        </div>
        <hr className="head"></hr>

        <h2>Start managing...</h2><button className="profileButton"onClick={this.toggleGigDisplay}>View Gigs</button>
        {gigItem}

        <h2>Or setup your profile</h2><button className="gigButton" onClick={this.toggleDisplay}>Set Up Your Profile</button>
        {displayItem}



        
       



      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  gigList: state.gigList
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

