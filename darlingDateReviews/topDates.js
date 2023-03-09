class TopDates {
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();

        /*const dateIdeaElement = document.querySelector("#testHeader");
        dateIdeaElement.textContent = this.getDateIdea();

        const dateInfoElement = document.querySelector("#Testp");
        dateInfoElement.textContent = this.getDateInfo();*/

        let dateObject = [];
        const dateText = localStorage.getItem('dates');
        if (dateText) {
            dateObject = JSON.parse(dateText);
        }

        if (dateObject.length) {
            for (const [i, newIdea] of dateObject.entries()) {
                const dateIdea = newIdea.idea;
                const dateInfo = newIdea.info;
                this.createNewCard(dateIdea, dateInfo);
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

    increaseLikes() {
        const numLikesElement = document.querySelector("#numLikes");
        numLikesElement.textContent = parseInt(numLikesElement.textContent) + 1;
    }

    createNewCard(dateIdea = "Test date idea", dateDescription = "Test Description of date idea") {
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
        likeButton.setAttribute("onclick", "topDates.increaseLikes()");
        likeButton.href = "#";
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
        numLikesEl.id = "numLikes";
        numLikesEl.textContent = "0";
        numLikesEl.style.fontSize = "45%";
        div4.appendChild(numLikesEl);
    }

}

const topDates = new TopDates();

/*
<h1 id="dateIdeaHeader">Top Five Date Ideas for the Week</h1>
            <div class="card" style="background-color: white;">
                <h5 class="card-header">Hike the Y!</h5>
                <div class="card-body">
                  <p class="card-text">Description of date idea.</p>
                </div>
                <div class="container">
                    <div class="like-button">
                        <a class="btn btn-primary" onclick="topDates.increaseLikes()" href="#" role="button" style="background-color: #F76C6C;">Like this idea!</a>
                    </div>
                    <div class="like-button">
                        <p id="likes">Likes: </p>
                    </div>
                    <div class="like-button">
                        <p id="numLikes">0</p>
                    </div>
                </div>
            </div>

            <div class="card" style="background-color: white;">
                <h5 class="card-header">Farmers Market Saturday Morning</h5>
                <div class="card-body">
                  <p class="card-text">Description of date idea.</p>
                </div>
            </div>
            <div class="card" style="background-color: white;">
                <h5 class="card-header">Pioneer book</h5>
                <div class="card-body">
                  <p class="card-text">Description of date idea.</p>
                </div>
            </div>
            <div class="card" style="background-color: white;">
                <h5 class="card-header">Ice Skating</h5>
                <div class="card-body">
                  <p class="card-text">Description of date idea.</p>
                </div>
            </div>
            <div id="test" class="card" style="background-color: white;">
                <h5 id = "testHeader" class="card-header">BYU Museum of Art (Moa)</h5>
                <div class="card-body">
                  <p id = "Testp" class="card-text">Description of date idea.</p>
                </div>
            </div>
        </main>*/