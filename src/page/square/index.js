import React, { PureComponent } from "react";

import './index.css'

export default class Square extends PureComponent {
    // 在Square组件中添加状态用来记录按钮被点击过
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({ value: 'X' })}>
                {this.state.value}
            </button>
        );
    }
}