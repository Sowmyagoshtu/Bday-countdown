// Set the date we're counting down to
const birthday = new Date("2024-09-12T00:00:00"); // Replace with your birthday

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>Happy Birthday!</h2>";
    }
}

// Update the count down every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();