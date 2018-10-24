import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class UserPage extends Component {
  state = {
    textVisible: false
  }

  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
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
      displayItem = this.props.history.push('/profile')
    }
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.username }! To begin, setup your profile. 
        </h1>
        <p>Your ID is: {this.props.user.id}</p>
        <LogOutButton className="log-in" />
        <button onClick={this.toggleDisplay}>Set Up Your Profile</button>
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
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

