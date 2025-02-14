// Task Planner
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Pomodoro Timer
let timer;
let timeLeft = 1500; // 25 minutes in seconds

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                document.getElementById("timerDisplay").textContent = formatTime(timeLeft);
            } else {
                clearInterval(timer);
                timer = null;
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    document.getElementById("timerDisplay").textContent = "25:00";
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

// Goal Tracker
function addGoal() {
    let goalInput = document.getElementById("goalInput");
    let goalList = document.getElementById("goalList");

    if (goalInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = goalInput.value;
        goalList.appendChild(li);
        goalInput.value = "";
    }
}
