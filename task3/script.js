// Quiz logic
function checkAnswer(answer) {
  if (answer === 'c') {
    alert("✅ Correct! .");
  } else {
    alert("❌ Incorrect! Try again.");
  }
}

// Fetch joke from public API
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      const jokeText = `${data.setup} 😂 ${data.punchline}`;
      document.getElementById('jokeDisplay').innerText = jokeText;
    })
    .catch(error => {
      document.getElementById('jokeDisplay').innerText = "Failed to fetch a joke.";
      console.error("Error fetching joke:", error);
    });
}
