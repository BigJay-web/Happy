let currentMemory = 1;
let puzzleAnswer = "love"; // The answer to the puzzle

// Start the journey
function startJourney() {
    document.getElementById('header').style.display = 'none';
    document.getElementById('journey').style.display = 'block';
}

// Show next memory
function nextMemory(memoryNumber) {
    document.getElementById(`memory-${currentMemory}`).style.display = 'none';
    document.getElementById(`memory-${memoryNumber}`).style.display = 'block';
    currentMemory = memoryNumber;
}

// Check puzzle answer
function checkPuzzle() {
    const input = document.getElementById('puzzle-input').value.toLowerCase();
    
    if (input === puzzleAnswer) {
        document.getElementById('final-message').style.display = 'block';
        document.getElementById('journey').style.display = 'none';
        document.getElementById('final-msg').textContent = 'You unlocked my heart with the right answer. 💖';
        document.body.style.backgroundColor = '#f3d1e7'; // Changing the background to a more warm tone
        document.body.style.fontFamily = 'Libre Baskerville, serif'; // Changing font to something more classic
        document.querySelector("h1").style.color = '#b5449e'; // Accent color changes
        document.querySelector("footer").style.color = '#6f3d77';
    } else {
        alert('Try again. 😔');
    }
}

// Reveal the final gift
function revealGift() {
    document.getElementById('gift').style.display = 'block';
    document.getElementById('final-message').style.display = 'none';
}
