function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[now.getMonth()];
    var year = now.getFullYear();

    // Format the time to ensure double digits (e.g., 09:05:02)
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    day = (day < 10) ? "0" + day : day;

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = day + " " + month + " " + year;
    var manilaTime = "                          " + dateString + " " + timeString;
    document.getElementById('clock').innerHTML = manilaTime;
}

// Update the clock every second
setInterval(updateClock, 1000);
// Call the function to set up the initial date and time
updateClock();