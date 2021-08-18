const Gameboard = ((symbol) => {
    let gameboard = [];
    let display = document.querySelectorAll('.display')
    display.forEach((box) => {
        function makeSelection() {
            let gameSymbol = document.createElement('div')
            gameSymbol.classList.add('symbol')
            gameSymbol.textContent = symbol;
            box.appendChild(gameSymbol);
        }
        let boardSpace = document.querySelectorAll('.square')
        boardSpace.forEach((space) => {
            space.addEventListener('click', makeSelection)
    })
    return {
        boardSpace,
        display
    }
    })
})('O');

const player = ((name) => {
    let playerName = () => {console.log(`${name}`)}
    let playerSelection = console.log()
    return {
        playerName,
        playerSelection
    }
});