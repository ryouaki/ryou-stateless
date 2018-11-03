import React from 'react';
import { dispatch } from './utils';
import Grandson from './Grandson';

export default class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  render() {
    return <div style={{background: 'green'}}>
      这里是儿子：
      <input value={this.state.message} onChange={(e) => {
        this.setState({
          message: e.target.value
        })
      }}></input>
      <button onClick={() => {
        dispatch('son', this.state.message);
      }}>告诉老子</button>
      <Grandson/>
    </div>
  }
}