const player = ((name, team) => {
    return {
        name,
        team
    }
});
const player1 = player('Adam', 'X')
const player2 = player('Brad', 'O')



const Gameboard = (() => {
    let gameboard = [];
    const setName = (name1, name2) => {
        let player1Name = document.querySelector('.player1Name')
        let player2Name = document.querySelector('.player2Name')
        player1Name.textContent = name1;
        player2Name.textContent = name2;
    }
    setName(player1.name, player2.name)

    const makeSelection = (currentPlayer) => {
        let _boardSpace = document.querySelectorAll('.square')
        _boardSpace.forEach((space) => {
            space.addEventListener('click', () => {
                let gameSymbol = document.createElement('div')
                gameSymbol.classList.add('symbol')
                gameSymbol.textContent = currentPlayer.team
                space.appendChild(gameSymbol);
                gameboard.push(space.textContent)
                space.disabled = true;
            })
        })
    }
    makeSelection(player2)
    return {
        gameboard,
        setName,
        makeSelection
    }
})();


const Game = (() => {
    let startGame = (player1, player2) => {
        this.player1 = player1;
        this.player2 = player2;
    }
    return {
        startGame
    }
})();
