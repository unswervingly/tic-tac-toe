import React, { PureComponent } from "react";

import Board from './page/board/index'

// 主页面
export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}