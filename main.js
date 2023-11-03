var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
//document.write(hour.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false}) + ":" + min.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false}));
//console.log("Done!");

 // Update the clock display
  document.getElementById("clock").textContent = timeString;
}

// Initial call to update the clock
updateClock();

// Set up an interval to update the clock every minute (60000 milliseconds)
setInterval(updateClock, 60000);
