import React from 'react';
import { dispatch } from './utils';

export default class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  render() {
    return <div style={{background: 'yellow'}}>
      这里是孙子：
      <input value={this.state.message} onChange={(e) => {
        this.setState({
          message: e.target.value
        })
      }}></input>
      <button onClick={() => {
        dispatch('grandson', this.state.message);
      }}>告诉爷爷</button>
    </div>
  }
}