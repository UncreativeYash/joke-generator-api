let jokeHolder = document.getElementById("joke");
let jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", async function jokeUpdate() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      jokeHolder.textContent = data.joke;
    });
});


/*
Credit : https://engineertodeveloper.com/make-a-dad-joke-generator-with-javascript/
*/