const canvas = document.querySelectorAll(".canvas")[0];
const cxt = canvas.getContext("2d");

const scale = 20;
const row = canvas.height / scale;
const colmn = canvas.width / scale;

let score = 0;
let snake = [];
snake[0] = {
    x: Math.floor(Math.random() * colmn) * scale,
    y: Math.floor(Math.random() * row) * scale,
};

let food = {
    x: Math.floor(Math.random() * colmn) * scale,
    y: Math.floor(Math.random() * row) * scale
};

let d = "right";
let gameSpeed = 150; 
let gameInterval = null;
let isPaused = false;

// የኪቦርድ መቆጣጠሪያ
document.onkeydown = function(event) {
    let key = event.keyCode;
    if (key == 37 && d != "right") d = "left";
    else if (key == 38 && d != "down") d = "up";
    else if (key == 39 && d != "left") d = "right";
    else if (key == 40 && d != "up") d = "down";
};

// መከላከያ (ገጹ እንዳይንቀሳቀስ)
window.addEventListener("keydown", function(e) {
    if(["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) return true;
    }
    return false;
}

function draw() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        cxt.fillStyle = (i == 0) ? "green" : "white";
        cxt.fillRect(snake[i].x, snake[i].y, scale, scale);
        cxt.strokeStyle = "black";
        cxt.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }

    cxt.fillStyle = "red";
    cxt.fillRect(food.x, food.y, scale, scale);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == "left") snakeX -= scale;
    if (d == "up") snakeY -= scale;
    if (d == "right") snakeX += scale;
    if (d == "down") snakeY += scale;

    let newHead = { x: snakeX, y: snakeY };

    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(gameInterval);
        alert("Game Over! Score: " + score);
        location.reload();
        return;
    }

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * colmn) * scale,
            y: Math.floor(Math.random() * row) * scale
        };
    } else {
        snake.pop();
    }
    snake.unshift(newHead);

    cxt.fillStyle = "white";
    cxt.font = "20px Arial";
    cxt.fillText("Score: " + score, 10, 20);
}

// --- የቁጥጥር ተግባራት (ለብሮውዘሩ እንዲታወቁ window. እንጠቀማለን) ---

window.startGame = function() {
    if (!gameInterval) {
        isPaused = false;
        gameInterval = setInterval(draw, gameSpeed);
        console.log("Game Started");
    }
};

window.pauseGame = function() {
    const pauseBtn = document.getElementById('pauseBtn');
    if (isPaused) {
        isPaused = false;
        gameInterval = setInterval(draw, gameSpeed);
        if(pauseBtn) pauseBtn.innerText = "Pause";
    } else {
        isPaused = true;
        clearInterval(gameInterval);
        gameInterval = null;
        if(pauseBtn) pauseBtn.innerText = "Resume";
    }
};

window.setSpeed = function(newSpeed) {
    gameSpeed = newSpeed;
    if (gameInterval && !isPaused) {
        clearInterval(gameInterval);
        gameInterval = setInterval(draw, gameSpeed);
    }
};