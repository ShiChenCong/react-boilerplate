import React, { Component } from 'react'
import ReactDom from 'react-dom';
import './index.less';

export default class App extends Component {
  render() {
    console.log('ss');
    return (
      <div>
        this is apps
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))

if (module.hot) { module.hot.accept(); }//组件热更新