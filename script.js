const player = ((name, team) => {
    return {
        name,
        team
    }
});
const player1 = player('Adam', 'X')
const player2 = player('Brad', 'O')


const Game = (() => {
    let startGame = (player1, player2) => {
        this.player1 = player1;
        this.player2 = player2;
    }

    let currentPlayer; 
    currentPlayer = player1
    function takeTurns(e) {
        e.target.textContent = currentPlayer.team;
        if (currentPlayer === player1) {
            currentPlayer = player2;
            e.target.textContent = currentPlayer.team;
        } else {
            currentPlayer = player1;
            e.target.textContent = currentPlayer.team
        }
    }
    return {
        startGame, 
        takeTurns
    }
})();


const Gameboard = (() => {
    let gameboard = [];
    const setName = (name1, name2) => {
        let player1Name = document.querySelector('.player1Name')
        let player2Name = document.querySelector('.player2Name')
        player1Name.textContent = name1;
        player2Name.textContent = name2;
    }
    setName(player1.name, player2.name)

    const createGrid = (rows, columns) => {
        let board = document.querySelector('.mainBoard')
        board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        for(i = 0; i < (rows * columns); i++) {
            let gameSymbol = document.createElement('div');
            gameSymbol.addEventListener('click', Game.takeTurns)
            gameSymbol.classList.add(i)
            board.appendChild(gameSymbol).classList.add('gridSpace')
        }
    }
    createGrid(3,3)

    return {
        gameboard,
        setName,
        createGrid
    }
})();