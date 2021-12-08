import React from "react";

import './index.css'

// export default class Square extends PureComponent {
//     // 删除子组件Square的自有状态
//     // constructor(props) {
//     //     super(props);
//     // 在Square组件中添加状态用来记录按钮被点击过
//     //     this.state = {
//     //         value: null
//     //     };
//     // }

//     render() {
//         return (
//             <button className="square" onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }


// 优化子组件Square为函数组件，无状态使用函数组件更效率
function Square(props) {

    return (
        // 在子组件Square修改按钮显示为父组件传来的参数，监听的点击方法也为父组件传来的方法
        <button className="square" onClick={props.onClick} style={{ backgroundColor: props.isHigh ? 'pink' : '' }}>
            {props.value}
        </button>
    );
}

export default Square