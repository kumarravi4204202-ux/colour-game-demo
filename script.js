let balance = 10000;
let selectedColor = null;
let timer = 30;

const balanceEl = document.getElementById("balance");
const timerEl = document.getElementById("timer");
const historyEl = document.getElementById("history");

function selectColor(color) {
    selectedColor = color;

    alert("Selected: " + color);
}

function startRound() {
    timer = 30;
    selectedColor = null;

    const countdown = setInterval(() => {
        timer--;
        timerEl.textContent = timer;

        if (timer <= 0) {
            clearInterval(countdown);
            finishRound();
        }
    }, 1000);
}

function finishRound() {

    const colors = ["Red", "Green", "Violet"];

    // Demo-only random result
    const result = colors[Math.floor(Math.random() * colors.length)];

    historyEl.innerHTML =
        "<p>Result: <b>" + result + "</b></p>" +
        historyEl.innerHTML;

    alert("Round Result: " + result);

    startRound();
}

startRound();
