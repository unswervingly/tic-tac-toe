import React, { PureComponent } from "react";

import './index.css'

import Square from '../square/index'

import { calculateWinner } from '../../utils/calculateWinner.js'

export default class Board extends PureComponent {

    // 状态提升
    // 把Square的状态放到父组件保存
    constructor(props) {
        super(props);
        this.state = {
            // 将 Board 组件的初始状态设置为长度为 9 的空值数组
            squares: Array(9).fill(null),
            // 轮流落子功能
            isX: true,
        };
    }

    renderSquare(i) {
        return <Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }


    handleClick(i) {

        // 创建了数组的一个副本
        const newSquares = this.state.squares.slice()

        // 当已经有人胜出，或者当前方格已经有数据，不做操作
        if (calculateWinner(this.state.squares) || newSquares[i]) {
            return
        }

        // 根据传过来的 i,改变newSquares数组的值
        newSquares[i] = this.state.isX ? "X" : "O"

        this.setState({
            squares: newSquares,
            isX: !this.state.isX,
        })


    }

    render() {
        const winner = calculateWinner(this.state.squares)

        let status = null
        // 检查是否有玩家胜出
        if (winner) {
            // 一旦有一方玩家胜出，就把获胜玩家的信息显示出来
            status = 'winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
        }

        return (
            <div className="board">
                <div className="status">{status}</div>
                {this.state.squares.map((item, index) => {
                    return this.renderSquare(index)
                })}
            </div >
        );
    }


}