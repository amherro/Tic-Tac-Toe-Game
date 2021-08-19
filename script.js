const Gameboard = ((symbol) => {
    let gameboard = [];
    let _boardSpace = document.querySelectorAll('.square')
    _boardSpace.forEach((space) => {
        space.addEventListener('click', () => {
            let gameSymbol = document.createElement('div')
            gameSymbol.classList.add('symbol')
            gameSymbol.textContent = symbol;
            space.appendChild(gameSymbol);
            gameboard.push(space.textContent)
         })
    })
    return {
        gameboard
    }
})('O');
const player = ((name) => {
    let playerName = () => {console.log(`${name}`)}
    let playerSelection = console.log()
    return {
        playerName,
        playerSelection
    }
});