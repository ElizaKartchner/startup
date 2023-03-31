

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
        const userName = this.getPlayerName();
        const newIdea = { user: userName, idea: dateIdea, info: dateInfo, likes: 0};
        this.saveReview(newIdea);

        // set the values to blank 
        dateIdeaElement.value = "";
        dateInfoElement.value = "";

    }

    async saveReview(newIdea) {
        try {
          const response = await fetch('/api/dateIdea', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newIdea),
        });
    
        } catch {
          // If there was an error then just track scores locally
          this.updateDateIdeasLocal(newIdea);
        }
    }

    updateDateIdeasLocal(newIdea) {
        let dateObject = [];
        const dateText = localStorage.getItem('dates');
        
        if (dateText) {
            dateObject = JSON.parse(dateText);
        }

        dateObject.push(newIdea);
        console.log(dateObject);

        localStorage.setItem('dates', JSON.stringify(dateObject));
      }


}


const createReview = new CreateReview();