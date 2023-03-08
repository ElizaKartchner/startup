// create the get player name
// create an element that says something like "logged in as.... "

//const playerNameEl = document.querySelector('.player-name');
//playerNameEl.textContent = this.getPlayerName();

class CreateReview {
    constructor() {

        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }

}


const createReview = new CreateReview();