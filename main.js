const gameBoard = (() => {
    let turn = 'X';
    let squares = document.getElementsByClassName('gameitem');

    // Create board and individual squares
    function createBoard() {
        let board = document.createElement('div');
        board.classList.add('gameboard');
        for (let i = 0; i < 9; i++) {
            let square = document.createElement('div');
            square.classList.add('gameitem');
            square.dataset.box = i;
            board.appendChild(square);
        }

        document.body.appendChild(board);
    };

    // Change turn from 'X' to 'O'
    function _changeTurn() {
        if (turn === 'X') {
            turn = 'O';
            return 'X';
        } else if (turn === 'O') {
            turn = 'X';
            return 'O';
        }
    };


    // Allow players to click squares to show 
    // either 'O' or 'X' depending on the turn
    function playInSquare() {
        for (let i = 0; i < squares.length; i++) {
            let currentSquare = squares[i];
            currentSquare.addEventListener('click', function inputPlay() {
                currentSquare.textContent = _changeTurn();
                checkWinner();
                currentSquare.removeEventListener('click', inputPlay);
            })
        }
    };

    // Check for a winner
    function checkWinner() {
        if (squares[0].textContent === 'X') {
            if (squares[4].textContent === 'X' && squares[8].textContent === 'X') {
                return 'X';
            } else if (squares[1].textContent === 'X' && squares[2].textContent === 'X') {
                return 'X';
            } else if (squares[3].textContent === 'X' && squares[6].textContent === 'X') {
                return 'X';
            }
        } else if (squares[8].textContent === 'X') {
            if (squares[2].textContent === 'X' && squares[5].textContent === 'X') {
                return 'X';
            } else if (squares[6].textContent === 'X' && squares[7].textContent === 'X') {
                return 'X';
            }
        } else if (squares[4].textContent === 'X') {
            if (squares[1].textContent === 'X' && squares[7].textContent === 'X') {
                return 'X';
            } else if (squares[3].textContent === 'X' && squares[5].textContent === 'X') {
                return 'X';
            } else if (squares[2].textContent === 'X' && squares[6].textContent === 'X') {
                return 'X';
            }
        } else if (squares[0].textContent === 'O') {
            if (squares[4].textContent === 'O' && squares[8].textContent === 'O') {
                return 'O';
            } else if (squares[1].textContent === 'O' && squares[3].textContent === 'O') {
                return 'O';
            } else if (squares[3].textContent === 'O' && squares[6].textContent === 'O') {
                return 'O';
            }
        } else if (squares[8].textContent === 'O') {
            if (squares[2].textContent === 'O' && squares[5].textContent === 'O') {
                return 'O';
            } else if (squares[6].textContent === 'O' && squares[7].textContent === 'O') {
                return 'O';
            } 
        } else if (squares[4].textContent === 'O') {
            if (squares[1].textContent === 'O' && squares[7].textContent === 'O') {
                return 'O';
            } else if (squares[3].textContent === 'O' && squares[5].textContent === 'O') {
                return 'O';
            } else if (squares[2].textContent === 'O' && squares[6].textContent === 'O') {
                return 'O';
            }
        }
    }

    return {
        createBoard,
        playInSquare,
    };
})();

gameBoard.createBoard();
gameBoard.playInSquare();