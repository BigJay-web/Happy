// Start the journey
function startJourney() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('journey').style.display = 'block';
}

// Show next memory
function nextMemory(memoryNumber) {
    const currentMemory = memoryNumber - 1;
    document.getElementById(`memory-${currentMemory}`).style.display = 'none';
    document.getElementById(`memory-${memoryNumber}`).style.display = 'block';
}

// Check puzzle answer
function checkPuzzle() {
    const input = document.getElementById('puzzle-input').value.toLowerCase();
    
    if (input === 'love') {
        document.getElementById('final-message').style.display = 'block';
        document.getElementById('journey').style.display = 'none';
        document.getElementById('special-msg').textContent = 'You unlocked my heart. 💖';
        document.body.style.backgroundColor = '#f3f1f8'; // Background color change
        document.body.style.fontFamily = 'Libre Baskerville, serif'; // Font change
        document.querySelector("h1").style.color = '#7d5ba6'; // Color change
        
        // Show the music playlist after unlocking
        setTimeout(function() {
            document.getElementById('playlist').style.display = 'block';
        }, 2000);
        
        // Show the movie section after playlist
        setTimeout(function() {
            document
