import React from 'react';

import './App.css';

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
          <h1>Hello From App.js</h1>
          <p>Clicks: {this.props.reduxState}</p>
        </header> 
        <button onClick={this.clickHandler}>ClickMe</button>
        <button onClick={this.unClickHandler}>UnClickMe</button>
      </div>
    );
  }
}//end component

const putReduxStateOnProps = ( reduxState ) => ( { reduxState } );

export default connect(putReduxStateOnProps)(App);
//we added connect for redux