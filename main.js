//var date = new Date();
//var hour = date.getHours();
//var min = date.getMinutes();
//document.write(hour.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false}) + ":" + min.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false}));
//console.log("Done!");

function updateClock() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  
  var timeString = hour.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  
  // Clear the document and write the updated time
  document.open();
  document.write(timeString);
  document.close();
}

// Initial call to update the clock
updateClock();

// Set up an interval to update the clock every minute (60000 milliseconds)
setInterval(updateClock, 60000);
