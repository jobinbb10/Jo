// Set the date we're counting down to
const countDownDate = new Date("Jan 31, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {

    // Get the current time
    const now = new Date().getTime();

    // Calculate the difference between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Countdown Ended!";
    }
}, 1000);