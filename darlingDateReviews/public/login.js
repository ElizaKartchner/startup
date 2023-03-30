function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "about.html";
    window.location.href = "review.html";
    window.location.href = "topDates.html";
}