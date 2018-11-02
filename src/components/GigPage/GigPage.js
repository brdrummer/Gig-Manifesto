import React, { Component } from 'react';
import { connect } from 'react-redux';
import GigItem from '../GigItem/GigItem';
import Map from '../Map/Map';

class GigPage extends Component {

  state = {
    textVisible: false
  }


  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_GIGS', payload: this.props.reduxState.user.id });

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
        <h1>
          Gig Management
       </h1>
       
       <hr className="head"></hr>
       <h2>Click a gig to open the map</h2>
       <hr className="head"></hr>
      
         
       {this.props.gigList.map(gig => {
              return <GigItem key={gig.id} gig={gig} />
            })}
           
        {/* {JSON.stringify(this.props.reduxState.user.id)} */}
        <hr className="head"></hr>
       
        <button className="gigButton"onClick={this.toggleDisplay}>Add Another Gig!</button>
        {displayItem}
        <button className="profileButton">Share</button>


 
          
     
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
