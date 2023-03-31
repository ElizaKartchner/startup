class TopDates {
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
        this.getDateIdeas();
    }

    async getDateIdeas() {
        let dates = []
        try {
            // Get the latest date ideas from the service
            const response = await fetch('/api/dateIdeas');
            dates = await response.json();

            // Save the ideas in case we go offline in the future
            localStorage.setItem('dates', JSON.stringify(dates));
            this.displayDateIdeas(dates);
        } catch {
            // If there was an error then just get the scores locally
            this.getDateIdeasLocal();
        }
    }

    getDateIdeasLocal() {
        let dateObject = [];
        const dateText = localStorage.getItem('dates');
        if (dateText) {
            dateObject = JSON.parse(dateText);
        }
        this.displayDateIdeas(dateObject);
    }

    displayDateIdeas(dateObject) {
        if (dateObject.length) {
            let counter = 1;
            for (const [i, newIdea] of dateObject.entries()) {
                const dateIdea = newIdea.idea;
                const dateInfo = newIdea.info;
                this.createNewCard(counter, dateIdea, dateInfo);
                counter = counter + 1;
            }
        } else {
            this.createNewCard("No ideas yet", "Please create a review");
        }
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }

    getDateIdea() {
        return localStorage.getItem('dateIdea') ?? 'My Date Idea';
    }

    getDateInfo() {
        return localStorage.getItem('dateInfo') ?? 'Description of date idea';
    }

    increaseLikes(button) {
        let selector = "#numLikes" + button.id;
        const numLikesElement = document.querySelector(selector);
        numLikesElement.textContent = parseInt(numLikesElement.textContent) + 1;
        
        let userName = this.getPlayerName();
        let numLikes = parseInt(numLikesElement.textContent);
        let dateIdea = "Go hike the y!"
        let dateInfo = "This is an awesome date idea!"
        const newIdea = { user: userName, idea: dateIdea, info: dateInfo, likes: numLikes};
        console.log(newIdea);
        this.updateLikes(newIdea);
    }

    async updateLikes(newIdea) {
        let dates = []
        try {
            const response = await fetch('/api/likes', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(newIdea),
            });

            // FIX ME
            //dates = await response.json();

            // Save the ideas in case we go offline in the future
            //localStorage.setItem('dates', JSON.stringify(dates));
            //this.displayDateIdeas(dates);

        } catch {
            console.log("There was an error updating the number of likes");
        }
    }
    

    createNewCard(counter, dateIdea = "Test date idea", dateDescription = "Test Description of date idea") {
        const likeCounter = "numLikes" + counter;
        console.log(likeCounter);

        const header = document.querySelector("#dateIdeaHeader");

        const cardEL = document.createElement('div');
        cardEL.className = "card";
        cardEL.style = "background-color: white;";
        header.appendChild(cardEL);

        const h5 = document.createElement('h5');
        h5.className = "card-header";
        h5.textContent = dateIdea;
        cardEL.appendChild(h5);

        const div1 = document.createElement('div');
        div1.className = "card-body";
        cardEL.appendChild(div1);

        const p1 = document.createElement('p');
        p1.className = "card-text";
        p1.textContent = dateDescription;
        p1.style.fontSize = "45%";
        div1.appendChild(p1);

        const divContainer = document.createElement('div');
        divContainer.className = "container";
        cardEL.appendChild(divContainer);

        const div2 = document.createElement('div');
        div2.className = "like-button";
        divContainer.appendChild(div2);
         
        const likeButton = document.createElement('a');
        likeButton.className = "btn btn-primary";
        //likeButton.onclick = this.increaseLikes(likeCounter);
        //likeButton.setAttribute("onclick", this.increaseLikes(likeCounter));
        //likeButton.addEventListener('click', this.increaseLikes(likeCounter));
        likeButton.id = counter;
        likeButton.setAttribute("onclick", "topDates.increaseLikes(this)");
        likeButton.href = "#!";
        likeButton.role = "button";
        likeButton.style = "background-color: #F76C6C;";
        likeButton.textContent = "Like this idea!";
        div2.appendChild(likeButton);

        const div3 = document.createElement('div');
        div3.className = "like-button";
        divContainer.appendChild(div3);

        //<p id="likes">Likes: </p>
        const likesEl = document.createElement('p');
        likesEl.id = "likes";
        likesEl.textContent = "Likes: ";
        likesEl.style.fontSize = "45%";
        div3.appendChild(likesEl);

        const div4 = document.createElement('div');
        div4.className = "like-button";
        divContainer.appendChild(div4);

        //<p id="numLikes">0</p>
        const numLikesEl = document.createElement('p');
        numLikesEl.id = likeCounter;
        numLikesEl.textContent = "0";
        numLikesEl.style.fontSize = "45%";
        div4.appendChild(numLikesEl);
    }

}

const topDates = new TopDates();

