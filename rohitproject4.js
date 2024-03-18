document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box');
    const textOn = document.querySelector('.text-on');
    const textTo = document.querySelector('.text-to');
    const move = document.querySelector('.move');
    const mWin = document.querySelector('.win');
    let currentPlayer = 'X';
    let moves = 0;
    let gameWon = false;

    function checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (boxes[a].innerHTML !== '' && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
                boxes[a].style.backgroundColor = '#79E2F2';
                boxes[b].style.backgroundColor = '#79E2F2';
                boxes[c].style.backgroundColor = '#79E2F2';
                gameWon = true;
                return true;
            }
        }
        return false;
    }

    function handleClick(e) {
        if (!gameWon && e.target.innerHTML === '') {
            e.target.innerHTML = currentPlayer;
            moves++;
            if (checkWinner()) {
                mWin.style.display = 'block';
                mWin.textContent = `Player ${currentPlayer} won the game..!`;
                return;
            } else if (moves === 9) {
                mWin.style.display = 'block';
                mWin.textContent = `It's a draw!`;
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            move.textContent = `Now it's Player ${currentPlayer}'s move...!`;
        }
    }

    function resetGame() {
        for (let box of boxes) {
            box.innerHTML = '';
            box.style.backgroundColor = 'white';
        }
        currentPlayer = 'X';
        moves = 0;
        gameWon = false;
        move.textContent = `Now it's Player ${currentPlayer} move...!`;
        mWin.style.display = 'none';
    }

    boxes.forEach(box => {
        box.addEventListener('click', handleClick);
    });

    mWin.addEventListener('click', resetGame);
});
