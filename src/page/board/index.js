import React, { PureComponent } from "react";

import './index.css'

import Square from '../square/index'

export default class Board extends PureComponent {

    renderSquare(i) {
        return <Square />;
    }


    render() {
        const status = 'Next player: X';

        return (
            <div className="board">
                <div className="status">{status}</div>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div >
        );
    }
}