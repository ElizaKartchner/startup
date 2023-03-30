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

        const dateIdea = dateIdeaElement.value;
        const dateInfo = dateInfoElement.value;

        let dateObject = [];
        const dateText = localStorage.getItem('dates');
        
        if (dateText) {
            dateObject = JSON.parse(dateText);
        }

        const newIdea = { idea: dateIdea, info: dateInfo };
        dateObject.push(newIdea);
        console.log(dateObject);

        localStorage.setItem('dates', JSON.stringify(dateObject));

        // set the value to blank 
        dateIdeaElement.value = "";
        dateInfoElement.value = "";

        //localStorage.setItem("dateIdea", dateIdeaElement.value);
        //localStorage.setItem("dateInfo", dateInfoElement.value);
        //window.location.href = "topDates.html";
    }


}


const createReview = new CreateReview();