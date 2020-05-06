import React from 'react';

import './App.css';
import RockPicker from '../RockPicker/RockPicker.js';

import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    console.log('Component mounting', this.props);
    
  }

clickHandler = ()=> {
  console.log('in clickHandler');
  this.props.dispatch(
    { type: 'click'});
}

  unClickHandler = () => {
    console.log('in clickHandler');
    this.props.dispatch(
      { type: 'unclick' });
  }

  render() {
    console.log(this.props);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rock and/or Roll</h1>
          <p>Rocks: {this.props.reduxState}</p>
        </header> 
        <RockPicker name={"Alan's"} dispatch={this.props.dispatch} />
        <RockPicker name={"Heather's"} dispatch={this.props.dispatch} />
        <RockPicker name={"Mohamed's"} dispatch={this.props.dispatch} />
        <RockPicker name={"Thy's"} dispatch={this.props.dispatch} />
        {/* this is sending the dispatch property of the App.js down to this component */}
        </div>
    );
  }
}//end component

const putReduxStateOnProps = ( reduxState ) => ( { reduxState } );

export default connect(putReduxStateOnProps)(App);
//we added connect for redux