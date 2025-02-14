document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('journey').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
    showMemory(1);
});

function showMemory(memoryNumber) {
    const memoryElements = document.querySelectorAll('.memory');
    memoryElements.forEach(memory => memory.style.display = 'none');
    document.getElementById(`memory-${memoryNumber}`).style.display = 'block';
}

const nextButtons = document.querySelectorAll('.next-memory');
nextButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        showMemory(idx + 2);
    });
});

function checkPuzzle() {
    const puzzleAnswer = document.getElementById('puzzle-input').value.toLowerCase();
    if (puzzleAnswer === 'love') {
        document.getElementById('final-message').style.display = 'block';
        document.getElementById('journey').style.display = 'none';
    } else {
        alert('Oops! Try again!');
    }
}

function revealGift() {
    document.getElementById('gift').style.display = 'block';
    document.getElementById('final-message').style.display = 'none';
}
