import React, { Component } from 'react';
import { connect } from 'react-redux';
import GigItem from '../GigItem/GigItem';
import Map from '../Map/Map';
import MediaCard from '../newCard/newCard';

class GigPage extends Component {

  state = {
    textVisible: false,
    isVisible: false
  }


  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_GIGS', payload: this.props.reduxState.user.id });

  }


  toggleDisplay = (event) => {
    this.setState({
      textVisible: !this.state.textVisible


    })
  }

  toggleMapDisplay = (event) => {
    this.setState({
     isVisible: !this.state.isVisible,
      

    })
  }

  render() {
    let displayItem;
   
    // IF for toggle
    if (this.state.textVisible) {
      displayItem = this.props.history.push('/gigform')
    }
    if (this.state.isVisible) {
      displayItem = this.props.history.push('/map')
    }
    return (
      <div>
        <h1>
          Gig Management
       </h1>
       
       <button className="gigButton"onClick={this.toggleDisplay}>Add Another Gig!</button>
       <button className="profileButton"onClick={this.toggleMapDisplay}>Find Directions</button>
       <hr className="head"></hr>

     
      
         
       {this.props.gigList.map(gig => {
              return <MediaCard  key={gig.id} gig={gig} />
            })}
           
        {/* {JSON.stringify(this.props.reduxState.user.id)} */}
        <hr className="head"></hr>
       
 
        {displayItem}
       


 
          
     
        {/* <Map className="sectiontwo"
        ></Map> */}
      </div>

    );
  }
}

const mapStateToProps = reduxState => ({
  gigList: reduxState.gigList,
  reduxState
});

export default connect(mapStateToProps)(GigPage);
