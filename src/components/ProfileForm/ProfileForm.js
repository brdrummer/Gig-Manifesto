import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileForm extends Component {
  state = {
    name: '',
    email: '',
    bands: '',
    city: '',
}
handleChangeFor = propertyName => event => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value
    });
};
handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PROFILE', payload: this.state });
    this.setState({
        ...this.state,
        name: '',
        email: '',
        bands: '',
        city: '',
       
    })
};
  

  render() {
    return (
      <div>
         <div>
                
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} onChange={this.handleChangeFor('name')} placeholder="First and Last" />
                    <input value={this.state.email} onChange={this.handleChangeFor('email')} placeholder="Email" />
                    <input value={this.state.bands} onChange={this.handleChangeFor('bands')} placeholder="Associated Bands" />
                    <input value={this.state.city} onChange={this.handleChangeFor('city')} placeholder="City" />

                    <input type="submit" value="Confirm" />

                </form>
              
            </div>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  profileList: reduxState.profileList
});

export default connect(mapStateToProps)(ProfileForm);
