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

    cacheReviewInfo() {
        const dateIdeaElement = document.querySelector("#newDateIdea");
        const dateInfoElement = document.querySelector("#infoDateIdea");
        localStorage.setItem("dateIdea", dateIdeaElement.value);
        localStorage.setItem("dateInfo", dateInfoElement.value);
        window.location.href = "topDates.html";

        // set the value to blank 
        dateIdeaElement.value = "";
        dateInfoElement.value = "";
    }

}


const createReview = new CreateReview();