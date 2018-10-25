import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileForm extends Component {
  state = {
    name: '',
    email: '',
    bands: '',
    city: '',
    image_url: '',
    user_profile_id: this.props.reduxState.user.id,
    isSubmitted: false
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
        image_url: '',
        user_profile_id: this.props.reduxState.user.id,
        isSubmitted: !this.state.isSubmitted
       
    })
};
  

  render() {
    let displayItem;
    // IF for toggle
    if (this.state.isSubmitted) {
        displayItem = this.props.history.push('/profile2')
    }
    return (
      <div>
         <div>
                
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} onChange={this.handleChangeFor('name')} placeholder="First and Last" />
                    <input value={this.state.email} onChange={this.handleChangeFor('email')} placeholder="Email" />
                    <input value={this.state.bands} onChange={this.handleChangeFor('bands')} placeholder="Associated Bands" />
                    <input value={this.state.city} onChange={this.handleChangeFor('city')} placeholder="City" />
                    <input value={this.state.image_url} onChange={this.handleChangeFor('image_url')} placeholder="Got a picture?" />

                    <input type="submit" value="Confirm" />

                </form>
                {displayItem}
              
            </div>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  profileList: reduxState.profileList,
  reduxState
});

export default connect(mapStateToProps)(ProfileForm);
