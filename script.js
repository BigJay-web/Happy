document.getElementById('start-game').addEventListener('click', function() {
    document.getElementById('game-message').style.display = 'block';
});

function checkInput() {
    var userInput = document.getElementById('user-input').value.toLowerCase();
    if (userInput === 'tin tin') {
        alert("You’ve unlocked the surprise! 💖 I can’t wait to be with you next Saturday!");
    } else {
        alert("Oops! Try again, my love.");
    }
}
