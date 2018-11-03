import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Son from './Son';

import { subscribe } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageFromSon: '',
      messageFromGrandson: ''
    }

    this.listenSonHandle = this.listenSonHandle.bind(this);
    this.listenGrandsonHandle = this.listenGrandsonHandle.bind(this);

    this.listenHandle = [
      subscribe('son', this.listenSonHandle),
      subscribe('grandson', this.listenGrandsonHandle)
    ]
  }

  listenSonHandle(payload) {
    this.setState({
      messageFromSon: payload
    });
  }

  listenGrandsonHandle(payload) {
    this.setState({
      messageFromGrandson: payload
    })
  }

  componentWillUnmount() {
    this.listenHandle.forEach((unSubscribe) => {
      unSubscribe();
    })
  }

  render() {
    return (
      <div style={{background: 'red'}}>
        <Son />
        <div>
          儿子来电:{this.state.messageFromSon}
        </div>
        <div>
          孙子来电:{this.state.messageFromGrandson}
        </div>
      </div>
    );
  }
}

export default App;
