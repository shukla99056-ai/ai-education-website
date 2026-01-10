// assets/js/chess.js

// ===== Chess ELO & Level =====
let eloScore = 800;
let chessLevel = "Beginner";

// Update ELO based on game result
function updateElo(result) {
    if(result === "win") eloScore += 10;
    else if(result === "loss") eloScore -= 10;
    else if(result === "draw") eloScore += 0;

    // Update HTML elements
    document.getElementById("eloScore").innerText = eloScore;
    document.getElementById("chessElo").innerText = eloScore;
    updateChessLevel();
}

// Determine chess level based on ELO
function updateChessLevel() {
    if(eloScore < 1000) chessLevel = "Beginner";
    else if(eloScore < 1500) chessLevel = "Intermediate";
    else chessLevel = "Advanced";

    // Update HTML elements
    document.getElementById("chessLevel").innerText = chessLevel;
    document.getElementById("chessLevelMini").innerText = chessLevel;
}

// Quiz answer handler
function answerQuiz(isCorrect) {
    const resultEl = document.getElementById("quizResult");
    resultEl.innerText = isCorrect ? "Correct! ✔" : "Wrong ❌";
}

// Chess Mini-game placeholder
function startNewGame() {
    alert("Chess Mini-Game starting... (Implement your logic here)");
}

// ===== Optional: Chess Board Setup Placeholder =====
function createChessBoard() {
    const board = document.getElementById("chessBoard");
    board.innerHTML = ""; // Clear board
    const rows = 8;
    const cols = 8;
    for(let r=0; r<rows; r++){
        for(let c=0; c<cols; c++){
            const square = document.createElement("div");
            square.classList.add("square");
            // Alternate colors
            if((r+c)%2 === 0) square.classList.add("white");
            else square.classList.add("black");
            board.appendChild(square);
        }
    }
}

// Initialize board on load
window.addEventListener("load", createChessBoard);
