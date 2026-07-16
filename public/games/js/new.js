const canvas = document.querySelectorAll(".canvas")[0];
const cxt = canvas.getContext("2d");

const scale = 20;
const row = canvas.height / scale;
const colmn = canvas.width / scale;

let score = 0; // ውጤት መቁጠሪያ
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
document.onkeydown = direction;

function direction(event) {
    let key = event.keyCode;
    if (key == 37 && d != "right") d = "left";
    else if (key == 38 && d != "down") d = "up";
    else if (key == 39 && d != "left") d = "right";
    else if (key == 40 && d != "up") d = "down";
}

// ራሱን መጋጨቱን ለማረጋገጥ (Self Collision Check)
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

function draw() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);

    // እባቡን መሳል
    for (let i = 0; i < snake.length; i++) {
        cxt.fillStyle = (i == 0) ? "green" : "white";
        cxt.strokeStyle = "red";
        cxt.fillRect(snake[i].x, snake[i].y, scale, scale);
        cxt.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }

    // ምግብ መሳል
    cxt.fillStyle = "#ff0";
    cxt.fillRect(food.x, food.y, scale, scale);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == "left") snakeX -= scale;
    if (d == "up") snakeY -= scale;
    if (d == "right") snakeX += scale;
    if (d == "down") snakeY += scale;

    // አዲሱ ራስ
    let newHead = { x: snakeX, y: snakeY };

    // --- ህጎች (Rules) ---

    // 1. ግድግዳ ሲነካ (Wall Collision) - Game Over
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
        clearInterval(playGame);
        alert("Game Over! ግድግዳ ነክተሃል። ውጤትህ: " + score);
        location.reload(); // ጨዋታውን እንደገና ለመጀመር
    }

    // 2. ራሱን ሲነክስ (Self Collision) - Game Over
    if (collision(newHead, snake)) {
        clearInterval(playGame);
        alert("Game Over! ራስህን ነክሰሃል። ውጤትህ: " + score);
        location.reload();
    }

    // 3. ምግብ ሲበላ እና ውጤት መቁጠር (Score)
    if (snakeX == food.x && snakeY == food.y) {
        score++; // ውጤት ጨምር
        food = {
            x: Math.floor(Math.random() * colmn) * scale,
            y: Math.floor(Math.random() * row) * scale
        };
    } else {
        snake.pop(); // ካልበላ ጅራቱን አንሳ
    }

    snake.unshift(newHead);

    // ውጤቱን ስክሪን ላይ መጻፍ
    cxt.fillStyle = "white";
    cxt.font = "20px Arial";
    cxt.fillText("Score: " + score, 10, 20);
}

let playGame = setInterval(draw, 200);