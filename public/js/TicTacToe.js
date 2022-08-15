var count = 0;
var player = 1;
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var canvas = document.getElementById("tic-tac-toe-board");
var context = canvas.getContext('2d');
var canvasSize = 500;
var sectionSize = canvasSize / 3;
canvas.width = canvasSize;
canvas.height = canvasSize;
context.translate(0.5, 0.5);
context.lineWidth = 10;

function main() {
    document.getElementById("main").style.display = "block";
    document.getElementById("learn").style.display = "none";
    document.getElementById("game").style.display = "none";
}

function start() {
    document.getElementById("main").style.display = "none";
    document.getElementById("learn").style.display = "none";
    document.getElementById("game").style.display = "block";

    canvas.addEventListener('mouseup', function (event) {
        addPlayingPiece(getCanvasMousePosition(event));
        drawBoard();
        setTimeout(() => {
            if(!checkWhoWins(1) && !checkWhoWins(2)){
                checkIsOver();
            }
        }, 100);
    });
    drawBoard();
}


function learn() {
    document.getElementById("main").style.display = "none";
    document.getElementById("learn").style.display = "block";
    document.getElementById("game").style.display = "none";
}

function exit() {
    window.close();
}

function addPlayingPiece(mouse) {
    var xCoordinate;
    var yCoordinate;
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            xCoordinate = x * sectionSize;
            yCoordinate = y * sectionSize;
            if (
                mouse.x >= xCoordinate && mouse.x <= xCoordinate + sectionSize &&
                mouse.y >= yCoordinate && mouse.y <= yCoordinate + sectionSize && board[y][x] == 0
            ) {
                board[y][x] = player;
                player = player == 1 ? 2 : 1;
                count++;
            }
        }
    }
}

function getCanvasMousePosition(event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}


function clearPlayingArea(xCoordinate, yCoordinate) {
    context.fillStyle = "#fff";
    context.fillRect(
        xCoordinate,
        yCoordinate,
        sectionSize,
        sectionSize
    );
}

function drawO(xCoordinate, yCoordinate) {
    var halfSectionSize = (0.5 * sectionSize);
    var centerX = xCoordinate + halfSectionSize;
    var centerY = yCoordinate + halfSectionSize;
    var radius = (sectionSize - 100) / 2;
    var startAngle = 0 * Math.PI;
    var endAngle = 2 * Math.PI;
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.stroke();
}

function drawX(xCoordinate, yCoordinate) {
    context.beginPath();
    var offset = 50;
    context.moveTo(xCoordinate + offset, yCoordinate + offset);
    context.lineTo(xCoordinate + sectionSize - offset, yCoordinate + sectionSize - offset);
    context.moveTo(xCoordinate + offset, yCoordinate + sectionSize - offset);
    context.lineTo(xCoordinate + sectionSize - offset, yCoordinate + offset);
    context.stroke();
}

function drawBoard() {
    document.querySelector("#textPlayer").textContent = "Current Player: " + player + " ";
    document.querySelector("#textComd").textContent = "Player " + (count % 2 + 1) + " can play now.";

    var xCoordinate;
    var yCoordinate;
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            xCoordinate = x * sectionSize;
            yCoordinate = y * sectionSize;
            clearPlayingArea(xCoordinate, yCoordinate);
            if (board[y][x] === 1) {
                drawX(xCoordinate, yCoordinate);
            }
            else if (board[y][x] === 2) {
                {
                    drawO(xCoordinate, yCoordinate);
                }
            }
        }
    }

// Board lines
    var lineStart = 4;
    var lineLenght = canvasSize - 5;
    context.beginPath();
    for (var y = 1; y <= 2; y++) {
        context.moveTo(lineStart, y * sectionSize);
        context.lineTo(lineLenght, y * sectionSize);
    }
    for (var x = 1; x <= 2; x++) {
        context.moveTo(x * sectionSize, lineStart);
        context.lineTo(x * sectionSize, lineLenght);
    }
    context.stroke();
}


function checkWhoWins(number) {
    let isWin = false;
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === number && board[i][1] === number && board[i][2] === number) || (board[0][i] === number && board[1][i] === number && board[2][i] === number)) {
            isWin = true;
            alert("Player " + number + " wins the game");
            window.location.reload();
        }
    }
    if ((board[0][0] === number && board[1][1] === number && board[2][2] === number) || (board[0][2] === number && board[1][1] === number && board[2][0] === number)) {
        isWin = true;
        alert("Player " + number + " wins the game");
        window.location.reload();
    }
    return isWin;
}

function checkIsOver() {
    if (count >= 9) {
        alert("It's a tie");
        window.location.reload();
    }
}

window.onload = main();