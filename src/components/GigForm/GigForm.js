import React, { Component } from 'react';
import { connect } from 'react-redux';
import GigPage from '../GigPage/GigPage';




class GigForm extends Component {
    
    state = {
        name: '',
        startTime: '',
        soundCheck: '',
        address: '',
        entryFee: Number,
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

        
        this.props.dispatch({ type: 'ADD_GIG', payload: this.state });
        this.setState({
            ...this.state,
            name: '',
            startTime: '',
            soundCheck: '',
            address: '',
            entryFee: '',
        })
        console.log(this.state);
        
    };


    toggleDisplay = (event) => {
        console.log('clicked!');
        
        this.setState({
            isSubmitted: !this.state.isSubmitted
        })
    } // End ToggleDisplay

    render() {
        let displayItem;
        // IF for toggle
        if(this.state.isSubmitted) {
        displayItem = <GigPage />;
        } 
        else displayItem = <p>Something Went Wrong!</p>;
        return (
                    <div>
                
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} onChange={this.handleChangeFor('name')} placeholder="Enter Venue Name" />
                    <input value={this.state.startTime} onChange={this.handleChangeFor('startTime')} placeholder="Start Time" />
                    <input value={this.state.soundCheck} onChange={this.handleChangeFor('soundCheck')} placeholder="Sound-Check Time" />
                    <input value={this.state.address} onChange={this.handleChangeFor('address')} placeholder="Address" />
                    <input value={this.state.entryFee} onChange={this.handleChangeFor('entryFee')} placeholder="entryFee" />
                   <div onClick={this.toggleDisplay}>
                    {displayItem}<input type="submit" name="submit" value="Add Gig" /> </div>
                    

                </form>
             
              
            </div>

        )
    }
}

const mapReduxStatetoProps = reduxState => ({
    reduxState 
})

export default connect(mapReduxStatetoProps)(GigForm);
