let countdown;

function startCountdown() {
    let timeInput = document.getElementById('timeInput').value;
    let time = parseInt(timeInput);

    if (isNaN(time) || time < 1 || time > 60) {
        alert("Please enter a valid number between 1 and 60.");
        return;
    }

    document.getElementById('timerDisplay').textContent = time;

    countdown = setInterval(function() {
        time--;
        document.getElementById('timerDisplay').textContent = time;

        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}
