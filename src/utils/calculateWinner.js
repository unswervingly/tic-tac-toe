// 判断出胜者 calculateWinner
export function calculateWinner(squares) {
    // 输赢规则lines
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // 依次遍历参数lines，将squares中每一项进行三三比对，得出结果
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

            // return squares[a]
            return {
                player: squares[a],
                // line（成棋的棋子的index数组）
                line: lines[i]
            };

        }
    }
    return {
        player: null,
        // line（成棋的棋子的index数组）
        line: []
    }
}