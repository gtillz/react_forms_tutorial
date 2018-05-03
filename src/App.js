import React, { Component } from 'react';
import './App.css';
import RefForm from './RefForm';
import HandlerForm from './HandlerForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      refValue: '',
      handlerValue: ''
    }
  }
//handler thats passed down to HandlerForm to update state in APP.
  handleForm = (val) => {
    this.setState({
      handlerValue: val
    })
  }
////handler thats passed down to RefForm to update state in APP.
  handleRefForm = (ref) => {
    this.setState({
      refValue: ref
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="row">
            <h1 className='col-12'>React Forms</h1>
            <p className='col-12'>The purpose of this tutorial is the help you understand how to capture user input.</p>
          </div>
          <RefForm handleRefForm={this.handleRefForm}/>
          <HandlerForm handleForm={this.handleForm}/>
        </div>
      </div>
    );
  }
}

export default App;
