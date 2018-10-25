import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'





class GigForm extends Component {

    state = {
        name: '',
        startTime: '',
        soundCheck: '',
        address: '',
        entryFee: Number,
        image_url: '',
        user_gig_id: this.props.reduxState.user.id,
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
        console.log('working');



        this.props.dispatch({ type: 'ADD_GIG', payload: this.state });
        this.setState({
            ...this.state,
            name: '',
            startTime: '',
            soundCheck: '',
            address: '',
            entryFee: '',
            image_url: '',
            isSubmitted: !this.state.isSubmitted
        })



    };



    render() {
        let displayItem;
        // IF for toggle
        if (this.state.isSubmitted) {
            displayItem = this.props.history.push('/gig')
        }

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} onChange={this.handleChangeFor('name')} placeholder="Enter Venue Name" />
                    <input value={this.state.startTime} onChange={this.handleChangeFor('startTime')} placeholder="Start Time" />
                    <input value={this.state.soundCheck} onChange={this.handleChangeFor('soundCheck')} placeholder="Sound-Check Time" />
                    <input value={this.state.address} onChange={this.handleChangeFor('address')} placeholder="Address" />
                    <input value={this.state.entryFee} onChange={this.handleChangeFor('entryFee')} placeholder="entryFee" />
                    <input value={this.state.image_url} onChange={this.handleChangeFor('image_url')} placeholder="Got an image? Paste the url" />

                    <input type="submit" name="submit" value="Add Gig" />
                </form>
                {JSON.stringify(this.state)}
                {displayItem}
            </div>



        )
    }
}

const mapReduxStatetoProps = reduxState => ({
    reduxState,
  
})

export default connect(mapReduxStatetoProps)(withRouter(GigForm));
