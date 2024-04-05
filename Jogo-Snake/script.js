document.addEventListener('DOMContentLoaded', () => {
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');
    const gameContainer = document.querySelector('.game-container');
    let snakeX = 10;
    let snakeY = 10;
    let foodX;
    let foodY;
    let dx = 0;
    let dy = 0;
    let interval;

    function startGame() {
        generateFood();
        interval = setInterval(moveSnake, 100);
    }

    function moveSnake() {
        snakeX += dx;
        snakeY += dy;

        if (snakeX < 0 || snakeX >= gameContainer.offsetWidth / 20 || snakeY < 0 || snakeY >= gameContainer.offsetHeight / 20) {
            clearInterval(interval);
            alert('Game Over!');
            return;
        }

        snake.style.left = snakeX * 20 + 'px';
        snake.style.top = snakeY * 20 + 'px';

        if (snakeX === foodX && snakeY === foodY) {
            generateFood();
        }
    }

    function generateFood() {
        foodX = Math.floor(Math.random() * (gameContainer.offsetWidth / 20));
        foodY = Math.floor(Math.random() * (gameContainer.offsetHeight / 20));

        food.style.left = foodX * 20 + 'px';
        food.style.top = foodY * 20 + 'px';
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && dy !== 1) {
            dx = 0;
            dy = -1;
        } else if (e.key === 'ArrowDown' && dy !== -1) {
            dx = 0;
            dy = 1;
        } else if (e.key === 'ArrowLeft' && dx !== 1) {
            dx = -1;
            dy = 0;
        } else if (e.key === 'ArrowRight' && dx !== -1) {
            dx = 1;
            dy = 0;
        }
    });

    startGame();
});
