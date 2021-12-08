import React, { PureComponent } from "react";

import Board from './page/board/index'

import { calculateWinner } from './utils/calculateWinner'

// 主页面
export default class App extends PureComponent {

  // 增加历史记录功能
  // 用来保存每一步的棋盘数据，并且把Board组件中的状态移到Game组件中
  constructor(props) {
    super(props);
    this.state = {
      // 下棋的历史记录
      history: [{
        squares: Array(9).fill(null)
      }],
      // 步骤数
      stepNumber: 0,
      // 判断下一步走棋方
      isX: true
    }
  }

  render() {
    const history = this.state.history;
    // 使用最新一次的棋盘数据
    // const current = history[history.length - 1];
    // 获取指定步数的历史数据
    const current = history[this.state.stepNumber];
    // 复制出最后一项历史数据
    const winner = calculateWinner(current.squares)

    let status = null
    // 检查是否有玩家胜出
    if (winner) {
      // 一旦有一方玩家胜出，就把获胜玩家的信息显示出来
      status = 'winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
    }

    return (
      <div className="app">
        <div className="game">
          <Board squares={current.squares} status={status} onClick={i => this.handleClick(i)} />
        </div>
        <div className="back_step">
          <p className="back">悔棋</p>
          {
            // 展示历史记录
            history.map((item, index) => {
              // 生成历史步骤按钮
              const desc = index ? `${index % 2 === 0 ? 'X' : 'O'} Go to step-${index}` : `Go to start ${index % 2 === 0 ? 'X' : 'O'}`;
              return (
                <button key={index} onClick={() => this.jumpTo(index)} className="btn">{desc}</button>
              )
            })
          }
        </div>
      </div>
    );
  }

  handleClick(i) {
    // 获取到当前步骤的历史数据 (将history改成截取0到当前步骤的数据)
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // 使用最新一次的棋盘数据
    const current = history[history.length - 1];
    // 复制出最后一项历史数据
    const newSquares = current.squares.slice()

    // 当已经有人胜出，或者当前方格已经有数据，不做操作
    if (calculateWinner(newSquares) || newSquares[i]) {
      return
    }

    // 根据传过来的 i,改变newSquares数组的值 (放棋子)
    newSquares[i] = this.state.isX ? "X" : "O"

    this.setState({
      // 把新的历史记录拼接到 history 上
      history: history.concat([{
        squares: newSquares
      }]),
      // 目前棋局的步数
      stepNumber: history.length,
      isX: !this.state.isX
    })
  }

  // 跳到历史步骤
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      // 更改step状态，并且当步数是偶数时，isX为true
      isX: step % 2 === 0
    })
  }
}