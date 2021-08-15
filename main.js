const gameBoard = (() => {
    let turn = 'X';
    let squares = document.getElementsByClassName('gameitem');
    let display = document.querySelector('.display');
    display.textContent = 'It\'s player X\'s turn';

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
            display.textContent = 'It\'s player O\'s turn';
            return 'X';
        } else if (turn === 'O') {
            turn = 'X';
            display.textContent = 'It\'s player X\'s turn';
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
                resetGame();
                currentSquare.removeEventListener('click', inputPlay);
            })
        }
    };

    // Check for a winner
    // BUG: player O doesn't win even when it should in some cases
    function checkWinner() {
        if (squares[0].textContent === 'X') {
            if (squares[4].textContent === 'X' && squares[8].textContent === 'X') {
                return 'X';
            } else if (squares[1].textContent === 'X' && squares[2].textContent === 'X') {
                return 'X';
            } else if (squares[3].textContent === 'X' && squares[6].textContent === 'X') {
                return 'X';
            }
        }
        if (squares[8].textContent === 'X') {
            if (squares[2].textContent === 'X' && squares[5].textContent === 'X') {
                return 'X';
            } else if (squares[6].textContent === 'X' && squares[7].textContent === 'X') {
                return 'X';
            }
        }
        if (squares[4].textContent === 'X') {
            if (squares[1].textContent === 'X' && squares[7].textContent === 'X') {
                return 'X';
            } else if (squares[3].textContent === 'X' && squares[5].textContent === 'X') {
                return 'X';
            } else if (squares[2].textContent === 'X' && squares[6].textContent === 'X') {
                return 'X';
            }
        }
        if (squares[0].textContent === 'O') {
            if (squares[4].textContent === 'O' && squares[8].textContent === 'O') {
                return 'O';
            } else if (squares[1].textContent === 'O' && squares[3].textContent === 'O') {
                return 'O';
            } else if (squares[3].textContent === 'O' && squares[6].textContent === 'O') {
                return 'O';
            }
        }
        if (squares[8].textContent === 'O') {
            if (squares[2].textContent === 'O' && squares[5].textContent === 'O') {
                return 'O';
            } else if (squares[6].textContent === 'O' && squares[7].textContent === 'O') {
                return 'O';
            }
        } 
        if (squares[4].textContent === 'O') {
            if (squares[1].textContent === 'O' && squares[7].textContent === 'O') {
                return 'O';
            } else if (squares[3].textContent === 'O' && squares[5].textContent === 'O') {
                return 'O';
            } else if (squares[2].textContent === 'O' && squares[6].textContent === 'O') {
                return 'O';
            }
        }
    };

    // Stop game and reset if players choose so
    function resetGame() {
        let result = checkWinner();
        if (result === 'X') {
            display.textContent = 'Player X wins!';
            clearEverything();
            
        } else if (result === 'O') {
            display.textContent = 'Player O wins!';
            clearEverything();
        }
    };

    // Clear the board 
    function clearEverything() {
        let restartBtn = document.createElement('button');
        let board = document.querySelector('.gameboard');
        restartBtn.textContent = "Restart"
        restartBtn.addEventListener('click', function() {
            for (let i = 0; i < 9; i++) {
                let square = squares[i];
                square.textContent = '';
            }
            board.remove();
            restartBtn.remove()
            gameBoard.createBoard();
            gameBoard.playInSquare();
            display.textContent = 'It\'s player X\'s turn';
            turn = 'X';
        })

        document.body.appendChild(restartBtn);
    }

    return {
        createBoard,
        playInSquare,
    };
})();

gameBoard.createBoard();
gameBoard.playInSquare();