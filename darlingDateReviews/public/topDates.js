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
            const header = document.querySelector("#dateIdeaHeader");
            header.replaceChildren()
            let counter = 1;
            for (const [i, newIdea] of dateObject.entries()) {
                const userName = newIdea.user;
                const dateIdea = newIdea.idea;
                const dateInfo = newIdea.info;
                const numOfLikes = newIdea.likes;
                this.createNewCard(counter, dateIdea, dateInfo, numOfLikes, userName);
                counter = counter + 1;
            }
        } else {
            this.createNewCard("No ideas yet", "Please create a review", 0);
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
        //numLikesElement.textContent = parseInt(numLikesElement.textContent) + 1;

        let userNameSelector = "#auther-name" + button.id
        const userNameEl = document.querySelector(userNameSelector);

        let dateIdeaSelector = "#date-idea" + button.id
        const dateIdeaEl = document.querySelector(dateIdeaSelector);
        let dateInfoSelector = "#date-info" + button.id
        const dateInfoEl = document.querySelector(dateInfoSelector);
        
        let userName = userNameEl.textContent.split(" ").slice(-1).pop();
        let numLikes = parseInt(numLikesElement.textContent);
        let dateIdea = dateIdeaEl.textContent;
        let dateInfo = dateInfoEl.textContent;
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

           
            dates = await response.json();

            // Save the ideas in case we go offline in the future
            localStorage.setItem('dates', JSON.stringify(dates));
            this.displayDateIdeas(dates);

        } catch {
            console.log("There was an error updating the number of likes");
        }
    }
    

    createNewCard(counter, dateIdea = "Test date idea", dateDescription = "Test Description of date idea", numOfLikes = 0, userName = "Test") {
        const likeCounter = "numLikes" + counter;

        const header = document.querySelector("#dateIdeaHeader");

        const cardEL = document.createElement('div');
        cardEL.className = "card";
        cardEL.style = "background-color: white;";
        header.appendChild(cardEL);

        const h5 = document.createElement('h5');
        h5.className = "card-header";
        h5.id = "date-idea" + counter;
        h5.textContent = dateIdea;
        cardEL.appendChild(h5);

        // Create a spot for the username
        const h6 = document.createElement('h6');
        h6.className = "card-subtitle mb-2 text-muted";
        h6.id = "auther-name" + counter;
        h6.textContent = "This idea was submited by " + userName;
        cardEL.appendChild(h6);

        const div1 = document.createElement('div');
        div1.className = "card-body";
        cardEL.appendChild(div1);

        const p1 = document.createElement('p');
        p1.className = "card-text" + counter;
        p1.id = "date-info" + counter;
        p1.textContent = dateDescription;
        p1.style.fontSize = "45%";
        div1.appendChild(p1);

        // All the code bellow create the like button and functionality 
        const divContainer = document.createElement('div');
        divContainer.className = "container";
        //cardEL.appendChild(divContainer);

        const div2 = document.createElement('div');
        div2.className = "like-button";
        //divContainer.appendChild(div2);
         
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
        //div2.appendChild(likeButton);

        const div3 = document.createElement('div');
        div3.className = "like-button";
        //divContainer.appendChild(div3);

        //<p id="likes">Likes: </p>
        const likesEl = document.createElement('p');
        likesEl.id = "likes";
        likesEl.textContent = "Likes: ";
        likesEl.style.fontSize = "45%";
        //div3.appendChild(likesEl);

        const div4 = document.createElement('div');
        div4.className = "like-button";
        //divContainer.appendChild(div4);

        //<p id="numLikes">0</p>
        const numLikesEl = document.createElement('p');
        numLikesEl.id = likeCounter; 
        numLikesEl.textContent = numOfLikes.toString();   
        numLikesEl.style.fontSize = "45%";
        //div4.appendChild(numLikesEl);
        
    }

}

const topDates = new TopDates();

