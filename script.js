// Show the next page when "Yes" is clicked
document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector(".landing-page").classList.add("hidden");
    document.getElementById("tinTinPage").classList.remove("hidden");
});

// Show the poetic message after typing "tin tin"
document.getElementById("nextButton").addEventListener("click", function() {
    let input = document.getElementById("tinTinInput").value;
    if (input.toLowerCase() === "tin tin") {
        document.getElementById("tinTinPage").classList.add("hidden");
        document.getElementById("poeticMessage").classList.remove("hidden");
    }
});

// Show About Twyla section after poetic message
setTimeout(function() {
    document.getElementById("poeticMessage").classList.add("hidden");
    document.getElementById("aboutTwyla").classList.remove("hidden");
}, 5000); // Delay for 5 seconds

// Show game section after About Twyla section
setTimeout(function() {
    document.getElementById("aboutTwyla").classList.add("hidden");
    document.getElementById("gameSection").classList.remove("hidden");
}, 10000); // Delay for 10 seconds

// Game logic - when the user submits the answers
document.getElementById("gameSubmit").addEventListener("click", function() {
    const answers = document.forms["gameForm"];
    if (answers["question1"].value === "Crime and Punishment" &&
        answers["question2"].value === "Dan Brown") {
        document.getElementById("treasureMessage").classList.remove("hidden");
    } else {
        alert("Try again!");
    }
});

// Countdown logic
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 8); // Set the countdown to 8 days from now
const countdown = document.getElementById("countdown");
setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("daysLeft").textContent = days;
    if (distance < 0) {
        clearInterval(this);
    }
}, 1000);
