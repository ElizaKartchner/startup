class TopDates {
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();

        const dateIdeaElement = document.querySelector("#testHeader");
        dateIdeaElement.textContent = this.getDateIdea();

        const dateInfoElement = document.querySelector("#Testp");
        dateInfoElement.textContent = this.getDateInfo();
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

}


const topDates = new TopDates();