const gameBoard = (() => {
    function createBoard() {
        let board = document.createElement('div');
        board.classList.add('gameboard');
        for (let i = 0; i < 9; i++) {
            let square = document.createElement('div');
            square.classList.add('gameitem');
            board.appendChild(square);
        }

        document.body.appendChild(board);
    }

    return {
        createBoard
    }
})();

gameBoard.createBoard();